import {
    handleServiceGetAllUser, handleServiceLoginUser,
    handleRegisterUserService, handleServiceGetProfileUser,
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
    handleServiceLogoutUser,
    handleServiceCreateReport,
    handleServiceGetAllProducts,
    handleServiceCreateProduct,
    handleServiceUpdateProduct,
    handleServiceDeleteProduct,
    handleServiceSearchTimekeeping 
} from '../services/useServices'

const handleGetAllUser = async (req, res) => {
    try {
        const data = await handleServiceGetAllUser();
        // console.log("data", data);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
};

const handleRegisterUser = async (req, res) => {
    try {
        const data = await handleRegisterUserService(req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
    }
};

const handleLoginUser = async (req, res) => {
    try {
        const userInfor = req.body;
        const data = await handleServiceLoginUser(userInfor);

        if (data.accessToken && data.refreshToken) {
            res.cookie("accessToken", data.accessToken, {
                // httpOnly: true,
                // secure: true,
            });
            res.cookie("refreshToken", data.refreshToken, {
                // httpOnly: true,
                // secure: true,
            });
        }
        delete data.accessToken;
        delete data.refreshToken;

        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleLogoutUser = async (req, res) => {
    try {
        const userId = req.userId; 
        const data = await handleServiceLogoutUser(userId);
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const handleGetProfileUser = async (req, res) => {
    try {
        const userId = req.userId;
        const data = await handleServiceGetProfileUser(userId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleCreateNotication = async (req, res) => {
    try {
        const userId = req.userId;
        const dataShift = req.body;
        const data = await handleServiceCreateNotication(userId, dataShift);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleCreateShift = async (req, res) => {
    try {
        const userId = req.userId;
        const notificationData = req.body;
        const data = await handleServiceCreateShift(userId, notificationData);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}


const handleDeleteUser = async (req, res) => {
    try {
        const userId = req.userId;
        const deleteUserId = req.body;
        const data = await handleServiceDeleteUser(userId, deleteUserId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}
const handleCreateTimeKeeing = async (req, res) => {
    try {
        const userId = req.userId;
        const timekeeping = req.body;
        const data = await handleServiceCreateTimeKeeing(userId, timekeeping);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}


const handleGetAllTimeKeeing = async (req, res) => {
    try {
        // console.log(req.query?.roleId);
        const userId = req.userId;
        const roleId = req.query?.roleId;
        const data = await handleServiceGetAllTimeKeeing(userId, roleId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}


const handleCountSalary = async (req, res) => {
    try {
        // console.log(req.query?.roleId);
        const userId = req.userId;
        const salary = req.body;
        const data = await handleServiceCountSalary(userId, salary);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}


const handleGettAllSalary = async (req, res) => {
    try {
        const userId = req.userId;
        const roleId = req.query?.roleId;
        const data = await handleServiceGetAllSalary(userId, roleId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleEditRole = async (req, res) => {
    try {
        const userId = req.userId;
        const role = req.body;
        const data = await handleServiceEditRole(userId, role);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleGetAllNotification = async (req, res) => {
    try {
        // const userId = req.userId;
        // const sales = req.body;
        const data = await handleServiceGetAllNotification();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleCreateSale = async (req, res) => {
    try {
        const userId = req.userId;  // Lấy userId từ thông tin người dùng đang đăng nhập
        if (!userId) {
            return res.status(401).json({
                statusCode: 1,
                message: "Người dùng chưa được xác thực"
            });
        }
        
        const data = req.body;  // Dữ liệu từ request body

        // Gọi service để xử lý việc tạo bản ghi sale
        const response = await handleServiceCreateSale(data, userId);

        if (response.statusCode === 2) {
            return res.status(201).json({
                statusCode: 2,
                message: response.message,
            });
        } else {
            return res.status(400).json({
                statusCode: 1,
                message: response.message,
            });
        }
    } catch (error) {
        console.error('Lỗi trong createSaleController:', error);
        return res.status(500).json({
            statusCode: 1,
            message: 'Có lỗi xảy ra, không thể tạo báo cáo',
        });
    }
};

const handleGetAllSale = async (req, res) => {
    try {
        const userId = req.userId;
        const roleId = req.query?.roleId;

        const data = await handleServiceGetAllSale(userId, roleId);

        if (data.statusCode === 2) {
            return res.status(200).json({ statusCode: 2, data: data.data });
        } else {
            return res.status(400).json({ statusCode: data.statusCode, message: data.message });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

const handleResetSales = async (req, res) => {
    try {
        const timeRest = req.body
        const data = await handleServiceResetSales(timeRest);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleGetUserById = async (req, res) => {
    try {
        const userId = req.query?.userId
        const data = await handleServiceGetUserById(userId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleEdittUserById = async (req, res) => {
    try {
        const users = req.body
        const data = await handleServiceEditUsersById(users);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

const handleCreateReport = async (req, res) => {
    try {
        const userId = req.userId
        const reportFile = req.body
        const data = await handleServiceCreateReport(reportFile, userId);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(200).json(error.message);
    }
}

// Lấy toàn bộ dư liệu
const handleGetAllProducts = async (req, res) => {
    try {
        const data = await handleServiceGetAllProducts();
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// Tạo sản phẩm
const handleCreateProduct = async (req, res) => {
    try {
        const data = await handleServiceCreateProduct(req.body);
        return res.status(201).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// Cập nhật sản phẩm
const handleUpdateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await handleServiceUpdateProduct(id, req.body);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// Xóa sản phẩm
const handleDeleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await handleServiceDeleteProduct(id);
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

// handle search timekeeping
const handleSearchTimekeeping = async (req, res) => {
    try {
        const searchType = req.query.searchType; // Lấy searchType từ query parameters
        const userId = req.query.userId; // Lấy userId từ query parameters
        const date = req.query.date; // Lấy date từ query parameters

        // Gọi service để tìm kiếm
        const result = await handleServiceSearchTimekeeping(searchType, userId, date);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Lỗi khi tìm kiếm chấm công:', error);
        return res.status(500).json({ error: 'Đã xảy ra lỗi khi tìm kiếm chấm công.' });
    }
};

module.exports = {
    handleGetAllUser,
    handleLoginUser,
    handleRegisterUser,
    handleGetProfileUser,
    handleCreateNotication,
    handleCreateShift,
    handleDeleteUser,
    handleCreateTimeKeeing,
    handleGetAllTimeKeeing,
    handleCountSalary,
    handleGettAllSalary,
    handleEditRole,
    handleGetAllNotification,
    handleCreateSale,
    handleGetAllSale,
    handleResetSales,
    handleGetUserById,
    handleEdittUserById,
    handleCreateReport,
    handleLogoutUser,
    handleGetAllProducts,
    handleCreateProduct,
    handleUpdateProduct,
    handleDeleteProduct,
    handleSearchTimekeeping
}