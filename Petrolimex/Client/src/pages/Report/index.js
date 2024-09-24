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
            } else {
                toast.error('Lỗi tạo báo cáo!');
            }
        } catch (error) {
            toast.error('Có lỗi xảy ra từ server!');
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

    const exportToExcel = () => {
        const data = listSales.map((sale, index) => {
            const formattedDate = formatDate(sale.day_for_sale);// Chuyển đổi ngày tháng thành đối tượng Date
            return {
                'STT': index + 1,
                'Ngày Bán': formattedDate, // Định dạng lại ngày tháng
                'Số Xăng Bán Được': sale.sales_figures_day,
                'Đơn Giá': sale.price,
                'Thành Tiền': sale.sales_figures_day * sale.price + ' vnd'
            };
        });

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SalesData');
        XLSX.writeFile(workbook, 'sales_data.xlsx');
        saveExcelDb(JSON.stringify(workbook));
    };
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

    const saveExcelDb = async (excel) => {
        if (excel) {
            await apiCreateReport(excel)
        }
    }

    const ResetSales = async () => {
        const response = await apiResetSales({ TIME_RESET, isResetting: true })
        console.log(response)
        if (response?.data?.statusCode === 2) {
            const response = await apiResetSales({ TIME_RESET, isResetting: false })
            console.log(response);
        }
        // setIsResetting(false)
        // console.log(response?.data?.statusCode === 2)
    }
    // console.log(isResetting);

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
                                    {listSales && listSales.map((sale, index) => (
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