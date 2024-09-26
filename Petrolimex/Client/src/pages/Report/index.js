import { useState, useEffect } from "react";

import * as XLSX from 'xlsx';
import { isValid, parse, format } from 'date-fns';

import Header from "@/layouts/Header";
import style from './Report.module.scss'

import { ToastContainer, toast } from "react-toastify";


import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { apiCreateSales, apiGetAllSales, apiGetProfileUser, apiResetSales, apiCreateReport ,apiGetAllProducts} from "@/services/apis";

import { TIME_RESET } from "@/environment";

function Report() {
    const [open, setOpen] = useState(false);
    const [roleId, setRoleId] = useState(null);
    const [listSales, setListSales] = useState(null)
    const [products, setProducts] = useState([]);
    const [isDataDeleted, setIsDataDeleted] = useState(false);

    const schema = yup.object().shape({
        time: yup.string().required("Trường này không được bỏ trống!"),
        problem: yup.string().required("Trường này không được bỏ trống!"),
        quantities: yup.array().of(
            yup.number().typeError("Phải là số!").min(0, "Không được nhỏ hơn 0")
        )
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    useEffect(() => {
        (async () => {
            const response = await apiGetProfileUser()
            setRoleId(response?.data?.data?.roleId)
        })()
    }, [])

    useEffect(() => {
        (async () => {
            if (roleId) {
                const response = await apiGetAllSales(roleId)
                console.log('response', response);
                if (response?.data?.statusCode === 2) {
                    setListSales(response?.data?.data)
                }
            }
        })()
    }, [roleId, open])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiGetAllProducts();
                setProducts(response.data.data);
                console.log(response)
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const onSubmit = async (data) => {
        console.log("Submitting data:", data);
        try {
            const response = await apiCreateSales(data);
            if (response?.data?.statusCode === 2) {
                toast.success('Tạo Báo Cáo Thành Công', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setOpen(false);  // Đóng modal sau khi thành công
                reset(); // Reset form
                setIsDataDeleted(false);
            } else {
                toast.error('Lỗi tạo báo cáo!');
            }
        } catch (error) {
            toast.error('Tồn kho của sản phẩm không đủ!');
            console.error("Error:", error);
        }
    };

    const handleReport = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
    }

    const exportToExcel = async () => {
        const data = listSales.map((sale, index) => {
            const formattedDate = formatDate(sale.date); // Định dạng lại ngày
            return {
                'STT': index + 1,
                'Ngày Bán': formattedDate, // Định dạng lại ngày bán
                'Tên Sản Phẩm': sale.productName, // Lấy tên sản phẩm
                'Số Xăng Bán Được (lít)': sale.quantity.toString(), // Chuyển đổi số lượng thành chuỗi
                'Đơn Giá': sale.unitPrice + ' VND', // Lấy đơn giá
                'Thành Tiền': (sale.quantity * sale.unitPrice).toFixed(2) + ' VND' // Tính thành tiền
            };
        });
    
        // Tạo worksheet từ dữ liệu JSON
        const worksheet = XLSX.utils.json_to_sheet(data);
    
        // Tính chiều rộng cột tự động dựa trên nội dung
        const columnWidths = Object.keys(data[0]).map(key => {
            const maxWidth = Math.max(...data.map(item => String(item[key]).length));
            return {
                wch: key === 'Số Xăng Bán Được (lít)' ? maxWidth + 15 : maxWidth + 2 // Thêm thêm không gian cho cột số xăng
            };
        });
    
        // Thêm chiều rộng cho các cột vào worksheet
        worksheet['!cols'] = columnWidths;
    
        // Thêm khung cho các ô
        const borderStyle = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" }
        };
    
        Object.keys(worksheet).forEach(cell => {
            if (cell[0] === '!') return; // Bỏ qua meta keys
            worksheet[cell].s = { border: borderStyle }; // Áp dụng border cho từng ô
        });
    
        // Tạo một workbook mới
        const workbook = XLSX.utils.book_new();
    
        // Thêm worksheet vào workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesData');
    
        // Xuất file Excel
        XLSX.writeFile(workbook, 'sales_data.xlsx');
    
        // Gọi API để lưu vào database
        await saveExcelDb(JSON.stringify(workbook));
    };
    
    // Hàm định dạng ngày
    const formatDate = (dateString) => {
        if (!dateString) {
            return '';
        }
    
        const parsedDate = parse(dateString, 'dd/MM/yyyy', new Date());
    
        if (isValid(parsedDate)) {
            return format(parsedDate, 'dd/MM/yyyy');
        } else {
            return ''; // Trả về chuỗi trống nếu ngày tháng không hợp lệ
        }
    };
    
    // Hàm lưu dữ liệu Excel vào DB
    const saveExcelDb = async (excel) => {
        if (excel) {
            try {
                await apiCreateReport(excel); // Gọi API sau khi lưu file Excel
            } catch (error) {
                console.error('Error saving to database:', error);
            }
        }
    };              

    const ResetSales = async () => {
        try {
            const response = await apiResetSales({ TIME_RESET, isResetting: true });
            console.log(response);
            if (response?.data?.statusCode === 2) {
                setIsDataDeleted(true); // Đặt thành true khi gọi API thành công
                toast.success('Dữ liệu đã được làm mới!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                
                const secondResponse = await apiResetSales({ TIME_RESET, isResetting: false });
                console.log(secondResponse);
            } else {
                setIsDataDeleted(false); // Đặt thành false nếu statusCode không phải là 2
            }
        } catch (error) {
            console.error("Error:", error);
            setIsDataDeleted(false); // Đặt thành false nếu có lỗi xảy ra
        }
    };    
    
    return (
        <>
            <div className={style.warpper}>

                <Header />
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* Same as */}
                <ToastContainer />
                <div>
                    <Modal
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        <Box sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 500,
                            bgcolor: 'background.paper',
                            // border: '2px solid #000',
                            boxShadow: 24,
                            p: 4,
                            borderRadius: '5px',
                            maxHeight: '80%',
                            overflowY: 'auto'
                        }}>
                            <h2>Báo Cáo Doanh Số</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={style.formGroup}>
                                    <span>Ngày</span><br />
                                    <input
                                        className={style.inputReport}
                                        placeholder="dd/mm/yy" {...register("time")}
                                        type="text"
                                    />
                                    <p className={style.errorReport}>{errors.time?.message}</p>
                                </div>
                                {products.map((product, index) => (
                                    <div key={product.id} className={style.formGroup}>
                                        <span>{product.product_name}</span><br />
                                        <input
                                            className={style.inputReport}
                                            placeholder={`Số lượng ${product.product_name}`}
                                            {...register(`quantities[${index}]`)} 
                                            type="number"
                                        />
                                        <p className={style.errorReport}>{errors.quantities?.[index]?.message}</p>
                                    </div>
                                ))}
                                <div className={style.formGroup}>
                                    <span>Ghi Chú</span><br />
                                    <textarea
                                        className={style.inputReport}
                                        placeholder="Vấn đề của quán" {...register("problem")}
                                    />
                                </div>
                                <div className={style.modalFooter}>
                                    <input type="submit" value="Tạo" className={style.inputSubmit} />
                                    <Button variant="outlined" color="error" size="small" sx={{ fontSize: '15px' }} onClick={handleClose}>Hủy</Button>
                                </div>
                            </form>
                        </Box>
                    </Modal>
                </div>
                <div className={style.container}>
                    <div className={style.content}>
                        <Button variant="contained" sx={{ fontSize: '16px' }} onClick={handleReport}>Báo Cáo</Button>

                    </div>
                </div>
                {
                    roleId && roleId !== 'R0' ?
                        <div className={style.listReport}>
                            <Box sx={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                                <Button variant="contained" onClick={exportToExcel} sx={{ fontSize: '16px' }}>Xuất Excel</Button>
                                <Button variant="contained" color="success" onClick={ResetSales} sx={{ fontSize: '16px' }}>Reset</Button>
                            </Box>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ngày Bán</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Số Xăng Bán Được(lít)</th>
                                        <th>Đơn Giá</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                    {!isDataDeleted && listSales && listSales.map((sale, index) => (
                                        <tr key={index}>
                                            <td>{sale.stt}</td>
                                            <td>{sale.date}</td>
                                            <td>{sale.productName}</td>
                                            <td>{sale.quantity}</td>
                                            <td>{sale.unitPrice}</td>
                                            <td>{sale.totalPrice}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        : null
                }
            </div >
        </>
    );
}

export default Report;