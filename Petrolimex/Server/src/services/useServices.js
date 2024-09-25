const cron = require('node-cron');

import db from "../models/index";
import {
    userCheckEmail,
    useHasPassword,
    useDecodePassword,
} from "../use/hooks";

import {
    useAccessToken,
    useRefreshToken,
    userVervifyRefreshToken,
} from "../jwt/useJwt";


const handleServiceGetAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {

            const allUsers = await db.User.findAll({
                attributes: {
                    exclude: ["password_hash", 'refresh_token'],
                },
                include: [
                    {
                        model: db.Role,
                        as: "roleData",
                        // attributes: [
                        //     "id",
                        //     "roleId",
                        //     "role_name",
                        // ],
                    },
                    {
                        model: db.Timekeeping,
                        as: "timekeepingData",
                        // attributes: [
                        //     "id",
                        //     "userId",
                        //     "hour_come",
                        //     "return_time"
                        // ],
                    },
                    {
                        model: db.Salary,
                        as: "salaryData",
                        // attributes: [
                        //     "id",
                        //     "userId",
                        //     "roleId",
                        //     "basic_salary"
                        // ],
                    },
                ],
                order: [["id", "ASC"]],
                raw: false,
                nest: true,
            });
            // console.log("allUsers", allUsers);
            resolve({
                statusCode: 2,
                data: allUsers,
            });
        } catch (error) {
            reject(error);
        }
    });
}

const handleRegisterUserService = (user) => {
    return new Promise(async (resolve, reject) => {
        const { email, password, firstName, lastName, cccd, dob, education, gender, home_town, nation, mobile, address } = user;
        try {
            if (!email || !password || !firstName || !lastName || !cccd || !dob || !education || !gender || !home_town || !nation) {
                resolve({
                    status: 400,
                    message: "you are missing a required parameter",
                });
            }

            const data = await userCheckEmail(email);
            // console.log('data', data);
            const hashPassword = await useHasPassword(password);
            if (!data) {
                await db.User.create({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password_hash: hashPassword,
                    cccd: cccd,
                    dob: dob,
                    education: education,
                    gender: gender,
                    home_town: home_town,
                    nation: nation,
                    mobile: mobile,
                    address: address
                });

                resolve({ statusCode: 2, message: "create user successful" });
            } else {
                resolve({ statusCode: 4, message: `${data.email} Your have not` });
            }
        } catch (error) {
            createError.InternalServerError();
            reject(error);
        }
    });
};

const handleServiceLoginUser = (userInfor) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await userCheckEmail(userInfor.email);
            // console.log(data);
            if (!data) {
                resolve({
                    statusCode: 4,
                    message: "Your login information is incorrect",
                });
                return;
            }
            if (data) {
                const passwordHash = data.password_hash;
                const userId = data.id;

                const password = await useDecodePassword(userInfor.password, passwordHash);
                if (password && data) {
                    const accessToken = await useAccessToken(userId);
                    const refreshToken = await useRefreshToken(userId);
                    delete data.password_hash;

                    resolve({
                        statusCode: 2,
                        user: data,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    });
                } else {
                    resolve({
                        statusCode: 4,
                        message: "Your login information is incorrect",
                    });
                }
            } else {
                resolve({
                    statusCode: 4,
                    message: "Your login information is incorrect",
                });
            }
        } catch (error) {
            console.log(error);
            reject(error);
        }
    });
}

const handleServiceLogoutUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findByPk(userId, { raw: false });
            if (!user) {
                return resolve({ statusCode: 1, message: 'Người dùng không tồn tại' });
            }
            
            user.refresh_token = null; 
            await user.save(); 

            resolve({ statusCode: 2, message: 'Đăng xuất thành công' });
        } catch (error) {
            reject(error);
        }
    });
};

const handleServiceGetProfileUser = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            /// findAll
            const data = await db.User.findOne({
                where: {
                    id: userId,
                },
                attributes: {
                    exclude: ["password_hash", 'refresh_token'],
                },
                include: [
                    {
                        model: db.Role,
                        as: "roleData",
                        // attributes: [
                        //     "id",
                        //     "roleId",
                        //     "role_name",
                        // ],
                    },
                    {
                        model: db.Timekeeping,
                        as: "timekeepingData",
                        // attributes: [
                        //     "id",
                        //     "userId",
                        //     "hour_come",
                        //     "return_time"
                        // ],
                    },
                    {
                        model: db.Salary,
                        as: "salaryData",
                        // attributes: [
                        //     "id",
                        //     "userId",
                        //     "roleId",
                        //     "basic_salary"
                        // ],
                    },
                    {
                        model: db.Shift,
                        as: "shiftData",
                    },
                    // {
                    //     model: db.Notification,
                    //     as: "notificationData",
                    // },
                    // {
                    //     model: db.Sales,
                    //     as: "saleData",
                    // },
                ],
                raw: false,
                nest: true,
            });

            resolve({
                statusCode: 2,
                data,
            });
        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceCreateNotication = (userId, notificationData) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(userId || notificationData.title || notificationData.content);
            if (!userId || !notificationData.title || !notificationData.content) {
                resolve({
                    status: 400,
                    message: "you are missing a required parameter",
                });
            }
            await db.Notification.create({
                userId: userId,
                title: notificationData.title,
                content: notificationData.content
            })
            resolve({ statusCode: 2, message: "create notification successful" });
        } catch (error) {
            reject(error);
        }
    });
}


const handleServiceCreateShift = (id, dataShift) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Shift.create({
                userId: dataShift.userId,
                time: dataShift?.data?.shifts
            })
            resolve({ statusCode: 2, message: "create notification successful" });

        } catch (error) {
            reject(error);
        }
    });
}


const handleServiceDeleteUser = (userId, deleteUserId) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(deleteUserId.userId);
            await db.User.destroy({
                where: {
                    id: deleteUserId.userId
                }
            })
            resolve({
                statusCode: 2,
                message: `the user in deleted`,
            });
        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceCreateTimeKeeing = (userId, timekeeping) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Timekeeping.create({
                userId: timekeeping.userId,
                time: timekeeping.time,
                type: timekeeping.type
            })
            resolve({ statusCode: 2, message: "create timekeeing successful" });

        } catch (error) {
            reject(error);
        }
    });
}


const handleServiceGetAllTimeKeeing = (userId, roleId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (roleId === 'R2' || roleId === 'R1') {
                const allTimekeeing = await db.Timekeeping.findAll({
                    order: [["id", "DESC"]],
                })
                resolve({ statusCode: 2, data: allTimekeeing });
            } else {
                const listTimekeeing = await db.Timekeeping.findAll({
                    where: {
                        userId: userId,
                    },
                    order: [["id", "DESC"]],
                })
                resolve({ statusCode: 2, data: listTimekeeing });
            }

        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceCountSalary = (userId, salary) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (salary.type === 'nv') {
                await db.Salary.create({
                    userId: userId,
                    basic_salary: salary.data.salaryBase,
                    allowance: salary.data.allowance,
                    subsidize: salary.data.subsidize,
                    time: salary.data.time,
                })
                resolve({ statusCode: 2, message: "create salary successful" });
            } else {
                await db.Salary.create({
                    userId: userId,
                    basic_salary: salary.data.salaryBase,
                    allowance: salary.data.allowance,
                    responsibility: salary.data.subsidize,
                    time: salary.data.time,
                })
                resolve({ statusCode: 2, message: "create salary successful" });

            }

        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceGetAllSalary = (userId, roleId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allSalary = await db.Salary.findAll()
            resolve({ statusCode: 2, data: allSalary });
        } catch (error) {
            reject(error);
        }
    });
}


const handleServiceEditRole = (userId, role) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userData = await db.User.findOne({
                where: {
                    id: role.userId
                },
                attributes: ['id', 'roleId'],
                raw: false,
                nest: true,
            })
            // console.log(role);
            // console.log(userData);
            if (userData) {
                userData.roleId = role.role
            }
            await userData.save();

            resolve({
                statusCode: 2,
                message: "edit role successful",
            });
        } catch (error) {
            reject(error);
        }
    });
}
const handleServiceGetAllNotification = (userId, role) => {
    return new Promise(async (resolve, reject) => {
        try {
            const allNotification = await db.Notification.findAll({
                order: [["id", "DESC"]],
            })
            resolve({
                statusCode: 2,
                message: allNotification,
            });
        } catch (error) {
            reject(error);
        }
    });
}

// const handleServiceCreateSale = async (data, userId) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Kiểm tra dữ liệu đầu vào
//             if (!data || !data.time || Object.keys(data).length === 0) {
//                 return resolve({ statusCode: 400, message: 'Dữ liệu không hợp lệ' });
//             }

//             const { time, problem, ...quantities } = data; // Lấy các trường từ dữ liệu gửi lên
//             const products = await db.Product.findAll(); // Lấy danh sách sản phẩm

//             if (!products.length) {
//                 return resolve({ statusCode: 404, message: 'Không tìm thấy sản phẩm' });
//             }

//             const salesPromises = products.map(async (product) => {
//                 const quantityField = `quantity_${product.id}`; // Trường số lượng tương ứng với product_id

//                 if (quantities[quantityField]) {
//                     await db.Sales.create({
//                         userId,
//                         product_id: product.id,
//                         date: time,
//                         quantity: quantities[quantityField],
//                         problem: problem || "",
//                         createdAt: new Date(),
//                         updatedAt: new Date(),
//                     });
//                 }
//             });

//             await Promise.all(salesPromises);
//             resolve({ statusCode: 2, message: 'Tạo báo cáo thành công' });
//         } catch (error) {
//             console.error('Lỗi khi tạo báo cáo:', error);
//             reject({ statusCode: 500, message: 'Lỗi khi tạo báo cáo: ' + error.message });
//         }
//     });
// };

const handleServiceCreateSale = async (data, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data || !data.time || Object.keys(data).length === 0) {
                return resolve({ statusCode: 400, message: 'Dữ liệu không hợp lệ' });
            }

            const { time, problem, quantities } = data; 
            
            if (!Array.isArray(quantities) || quantities.length === 0) {
                return resolve({ statusCode: 400, message: 'Số lượng không hợp lệ' });
            }

            const products = await db.Product.findAll(); 

            if (!products.length) {
                return resolve({ statusCode: 404, message: 'Không tìm thấy sản phẩm' });
            }

            const salesPromises = products.map(async (product, index) => {
                const quantity = quantities[index]; 

                if (quantity !== undefined) { 
                    await db.Sales.create({
                        userId,
                        product_id: product.id,
                        date: time,
                        quantity: quantity,
                        problem: problem || "",
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
                }
            });

            await Promise.all(salesPromises);
            resolve({ statusCode: 2, message: 'Tạo báo cáo thành công' });
        } catch (error) {
            console.error('Lỗi khi tạo báo cáo:', error);
            reject({ statusCode: 500, message: 'Lỗi khi tạo báo cáo: ' + error.message });
        }
    });
};

// const handleServiceGetAllSale = (userId, roleId) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             if (roleId === "R1" || roleId === 'R2') {
//                 const allSales = await db.Sales.findAll({
//                     include: [
//                         {
//                             model: db.Product, // Liên kết với bảng Product
//                             attributes: ['product_name', 'unit_price'],
//                         }
//                     ],
//                     order: [['createdAt', 'DESC']],
//                     raw: true, // Thêm raw: true để nhận được dữ liệu dưới dạng plain object
//                     nest: true, // Nesting để giữ cấu trúc quan hệ giữa bảng Sales và Product
//                 });

//                 if (allSales.length > 0) {
//                     const salesReport = allSales.map((sale, index) => ({
//                         stt: index + 1,
//                         date: sale.date,
//                         productName: sale.Product.product_name || 'Unknown',
//                         quantity: sale.quantity,
//                         unitPrice: sale.Product.unit_price || 0,
//                         totalPrice: (sale.quantity * sale.Product.unit_price || 0).toFixed(2),
//                     }));

//                     resolve({ statusCode: 2, data: salesReport });
//                 } else {
//                     resolve({ statusCode: 404, message: 'Không có dữ liệu bán hàng' });
//                 }
//             } else {
//                 resolve({ statusCode: 403, message: 'Không có quyền truy cập' });
//             }
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
const handleServiceGetAllSale = (userId, roleId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (roleId === "R1" || roleId === 'R2') {
                const allSales = await db.Sales.findAll({
                    include: [
                        {
                            model: db.Product,
                            attributes: ['product_name', 'unit_price'],
                        }
                    ],
                    order: [['createdAt', 'DESC']],
                    raw: true,
                    nest: true,
                });

                // Trả về mảng rỗng nếu không có dữ liệu bán hàng
                const salesReport = allSales.map((sale, index) => ({
                    stt: index + 1,
                    date: sale.date,
                    productName: sale.Product.product_name || 'Unknown',
                    quantity: sale.quantity,
                    unitPrice: sale.Product.unit_price || 0,
                    totalPrice: (sale.quantity * sale.Product.unit_price || 0).toFixed(2),
                }));

                resolve({ statusCode: 2, data: salesReport.length > 0 ? salesReport : [] });
            } else {
                resolve({ statusCode: 403, message: 'Không có quyền truy cập' });
            }
        } catch (error) {
            reject(error);
        }
    });
};


// let cronJob = null;
// const startScheduledReset = (timeInSeconds) => {
//     if (cronJob) {
//         // Nếu công việc lên lịch đã tồn tại, hủy nó trước khi tạo công việc mới
//         cronJob.stop();
//     }

//     cronJob = cron.schedule(`*/${timeInSeconds} * * * * *`, async () => {
//         try {
//             await db.Sales.destroy({
//                 where: {}, // Điều kiện để xóa, rỗng để xóa hết dữ liệu
//                 truncate: true // Chọn truncate để xóa dữ liệu nhanh hơn
//             });
//             console.log('Reset sales successful');
//         } catch (error) {
//             console.error('Error resetting sales:', error);
//         }
//     });
// };

// const handleServiceResetSales = async (timeRest) => {
//     try {
//         const timeInSeconds = parseInt(timeRest.TIME_RESET); // Chuyển đổi giá trị thời gian sang số nguyên

//         if (timeRest.isResetting) {
//             if (isNaN(timeInSeconds) || timeInSeconds <= 0) {
//                 return { statusCode: 1, message: 'Invalid time value.' };
//             }

//             startScheduledReset(timeInSeconds);
//             return { statusCode: 2, message: 'Reset sales scheduled' };
//         }

//         if (cronJob) {
//             cronJob.stop();
//             cronJob = null;
//             return { statusCode: 3, message: 'Reset canceled' };
//         }

//         return { statusCode: 0, message: 'No action taken' };
//     } catch (error) {
//         return { statusCode: 4, message: 'Error handling service reset' };
//     }
// };

let resetJob = null;
const handleServiceResetSales = (timeRest) => {
    return new Promise(async (resolve, reject) => {
        try {
            const timeInSeconds = parseInt(timeRest.TIME_RESET); // Chuyển đổi giá trị thời gian sang số nguyên
            if (timeRest.isResetting) {
                resetJob = cron.schedule(`*/${timeInSeconds} * * * * *`, async () => {
                    try {
                        await db.Sales.destroy({
                            where: {}, // Điều kiện để xóa, rỗng để xóa hết dữ liệu
                            truncate: true // Chọn truncate để xóa dữ liệu nhanh hơn
                        });

                        resolve({ statusCode: 2, message: 'Reset sale successful' });

                    } catch (error) {
                        resolve({ statusCode: 4, message: 'Reset sale error' });
                    }
                });
            } else {
                resetJob.stop()
                resetJob = null
                return { statusCode: 3, message: 'Reset canceled' };
            }

        } catch (error) {
            reject(error);
        }
    });
}

// let resetJob = null;
// // let isResetting = false
// const handleServiceResetSales = (timeRest) => {
//     try {
//         const timeInSeconds = parseInt(timeRest.TIME_RESET);
//         console.log(timeRest);
//         // isResetting = true
//         if (timeRest.isResetting) {
//             // isResetting = false
//             if (!resetJob) {
//                 resetJob = cron.schedule(`*/${timeInSeconds} * * * * *`, async () => {
//                     try {
//                         await db.Sales.destroy({
//                             where: {}, // Điều kiện để xóa, rỗng để xóa hết dữ liệu
//                             truncate: true // Chọn truncate để xóa dữ liệu nhanh hơn
//                         });
//                         console.log('Reset sale successful');
//                     } catch (error) {
//                         console.error('Reset sale error:', error);
//                     }
//                 });
//                 resolve({ statusCode: 2, message: 'Reset sale successful' });
//             } else {
//                 return { statusCode: 1, message: 'Reset already scheduled' };
//             }
//         } else {
//             if (resetJob) {
//                 resetJob.stop();
//                 resetJob = null;
//                 return { statusCode: 3, message: 'Reset canceled' };
//             } else {
//                 return { statusCode: 4, message: 'No action taken' };
//             }
//         }

//     } catch (error) {
//         return { statusCode: 0, message: 'Error occurred in handling reset' };
//     } finally {
//         // isResetting = false
//     }
// };



const handleServiceGetUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const findUserById = await db.User.findOne({
                where: {
                    id: userId
                },
                exclude: ['password_hash', 'refresh_token']
            })
            if (findUserById) {
                resolve({ statusCode: 2, data: findUserById });
            }
        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceEditUsersById = (users) => {
    return new Promise(async (resolve, reject) => {
        try {
            // console.log(users.users);
            const findUser = await db.User.findOne({
                where: {
                    id: users.users.userId
                },
                attributes: {
                    exclude: ["password_hash", 'refresh_token'],
                },
                raw: false,
                nest: true,
            })
            if (findUser) {
                findUser.firstName = users.users.firstName
                findUser.lastName = users.users.lastName
                findUser.address = users.users.address
                findUser.dob = users.users.dob
                findUser.home_town = users.users.home_town
                findUser.gender = users.users.gender
                findUser.education = users.users.education
                findUser.nation = users.users.nation
                findUser.mobile = users.users.mobile ? users.users.mobile : null
                findUser.cccd = users.users.cccd
            }
            await findUser.save();
            resolve({
                statusCode: 2,
                message: "edit user successful",
            });
        } catch (error) {
            reject(error);
        }
    });
}
const handleServiceCreateReport = (reportFile, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (reportFile) {

                await db.Report.create({
                    userId: userId,
                    file: reportFile
                })

                resolve({
                    statusCode: 2,
                    message: "edit user successful",
                });
            }
        } catch (error) {
            reject(error);
        }
    });
}

const handleServiceGetAllProducts = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allProducts = await db.Product.findAll({
                attributes: [
                    "id",
                    "product_name",
                    "unit_price",
                    "stock_level",
                    "description",
                    "createdAt",
                    "updatedAt"
                ],
                order: [["id", "ASC"]],
                raw: false,
                nest: true,
            });
            resolve({
                statusCode: 200,
                data: allProducts,
            });
        } catch (error) {
            reject(error);
        }
    });
}

// Tạo sản phẩm
const handleServiceCreateProduct = (productData) => {
    return new Promise(async (resolve, reject) => {
        try {
            const newProduct = await db.Product.create({
                product_name: productData.product_name,
                unit_price: productData.unit_price,
                stock_level: productData.stock_level,
                description: productData.description
            });
            resolve({
                statusCode: 201,
                message: "Thêm sản phẩm thành công",
                data: newProduct,
            });
        } catch (error) {
            reject(error);
        }
    });
};

// Cập nhật sản phẩm
const handleServiceUpdateProduct = (id, productData) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Sử dụng phương thức update của Sequelize để cập nhật trực tiếp
            const updatedProduct = await db.Product.update(
                {
                    product_name: productData.product_name,
                    unit_price: productData.unit_price,
                    stock_level: productData.stock_level,
                    description: productData.description,
                },
                {
                    where: { id: id },
                    returning: true,  // Tùy chọn này trả về sản phẩm đã cập nhật
                    plain: true,      // Giảm về 1 đối tượng thay vì mảng
                }
            );

            if (!updatedProduct) {
                return resolve({
                    statusCode: 404,
                    message: "Product not found",
                });
            }

            resolve({
                statusCode: 200,
                message: "Product updated successfully",
                data: updatedProduct[1], // Trả về sản phẩm đã cập nhật
            });
        } catch (error) {
            reject(error);
        }
    });
};


// Xóa sản phẩm
// const handleServiceDeleteProduct = (id) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Xóa trực tiếp dựa trên điều kiện where
//             const result = await db.Product.destroy({
//                 where: { id: id },
//             });

//             if (result === 0) {
//                 return resolve({
//                     statusCode: 404,
//                     message: "Product not found",
//                 });
//             }

//             resolve({
//                 statusCode: 200,
//                 message: "Product deleted successfully",
//             });
//         } catch (error) {
//             reject(error);
//         }
//     });
// };
const handleServiceDeleteProduct = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Xóa tất cả các bản ghi liên quan trong bảng sales
            await db.Sales.destroy({
                where: { product_id: id },
            });

            // Sau đó xóa sản phẩm dựa trên điều kiện where
            const result = await db.Product.destroy({
                where: { id: id },
            });

            if (result === 0) {
                return resolve({
                    statusCode: 404,
                    message: "Product not found",
                });
            }

            resolve({
                statusCode: 200,
                message: "Product deleted successfully",
            });
        } catch (error) {
            console.error('Lỗi khi xóa sản phẩm:', error);
            reject({
                statusCode: 500,
                message: 'Có lỗi xảy ra khi xóa sản phẩm: ' + error.message,
            });
        }
    });
};

module.exports = {
    handleServiceGetAllUser,
    handleServiceLoginUser,
    handleRegisterUserService,
    handleServiceGetProfileUser,
    handleServiceCreateNotication,
    handleServiceCreateShift,
    handleServiceDeleteUser,
    handleServiceCreateTimeKeeing,
    handleServiceGetAllTimeKeeing,
    handleServiceCountSalary,
    handleServiceGetAllSalary,
    handleServiceEditRole,
    handleServiceGetAllNotification,
    handleServiceCreateSale,
    handleServiceGetAllSale,
    handleServiceResetSales,
    handleServiceGetUserById,
    handleServiceEditUsersById,
    handleServiceCreateReport,
    handleServiceLogoutUser,
    handleServiceGetAllProducts,
    handleServiceCreateProduct,
    handleServiceUpdateProduct,
    handleServiceDeleteProduct
}