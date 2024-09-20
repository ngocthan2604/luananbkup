import { useEffect, useState } from "react";
import Header from "@/layouts/Header";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// import style from '../Employee/Employee.module.scss'
import style from './product.module.scss'
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";
import {ErrorOutline} from '@mui/icons-material';

function Product() {
    const [open, setOpen] = useState(false);
    const [isDialog, setIsDialog] = useState(false)
    const [isEditing, setIsEditing] = useState(false);

    const schema = yup.object().shape({
        time: yup.string().required("Time is Required!"),
        size: yup.string().required("Size is Required!"),
        price: yup.string().default('25'),
        problem: null,

    });

    const {
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleAddProduct = () => {
        setIsEditing(false);
        setOpen(true);
    }

    const handleEditProduct = () => {
        setIsEditing(true);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
        reset();
    }

    const handleOpenDialog = (userId) => {
        setIsDialog(true);
    };

    const handleCloseDialog  = () => {
        setIsDialog(false);
    };

    return(
        <div>
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
                theme="colored"
            />
            <div className={style.container}>
                <h1 className={style.title}>Danh Sách Sản Phẩm
                    <Button variant="contained" disableElevation size="large" sx={{ fontSize: '18px' }} onClick={handleAddProduct}>Thêm Sản Phẩm</Button>
                </h1>
                <table className={style.tableProduct}>
                    <thead>
                        <tr>
                            <th>Mã Sản Phẩm</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Đơn Giá</th>
                            <th>Số Lượng Tồn(lít)</th>
                            <th>Mô Tả</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>xang 92</td>
                            <td>23000</td>
                            <td>10000</td>
                            <td>loai xang danh cho xe may</td>
                            <td>
                                <Button className={style.btnEdit} variant="contained">Sửa</Button>
                                <Button className={style.btnRemove} variant="outlined" color="error">Xóa</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>xang 92</td>
                            <td>23000</td>
                            <td>10000</td>
                            <td>loai xang danh cho xe may</td>
                            <td>
                                <Button className={style.btnEdit} variant="contained" onClick={handleEditProduct}>Sửa</Button>
                                <Button className={style.btnRemove} variant="outlined" color="error" onClick={handleOpenDialog}>
                                    Xóa
                                    {
                                        isDialog &&(
                                            <div className={style.dialog} onClick={(e) => {e.stopPropagation()}}>
                                                <h4><ErrorOutline style={{fontSize:18, color:'#1976d2',margin: '0 5px 2px 0'}}/> Xác nhận </h4>
                                                <p>Bạn chắc chắn xóa User này?</p>
                                                <span style={{backgroundColor: 'red'}} onClick={() => {
                                                        handleCloseDialog();
                                                    }
                                                }>Xóa</span>
                                                <span style={{backgroundColor: '#1976d2'}} onClick={handleCloseDialog}>Hủy</span>
                                            </div>
                                        )
                                        }
                                </Button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
                            borderRadius: '5px'
                        }}>
                            <h2 style={{textAlign: 'center',marginBottom: '24px',fontSize: '28px'}}>{isEditing ? 'Sửa Sản Phẩm' : 'Thêm Sản Phẩm'}</h2>
                            <form>
                                <div className={style.formGroup}>
                                    <span>Tên Sản Phẩm</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập tên sản phẩm..." 
                                        type="text"
                                    />
                                    <p className={style.errorProduct}>{errors.time?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Đơn Giá</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập đơn giá..." 
                                        type="number"
                                    />
                                    <p className={style.errorProduct}>{errors.size?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Số Lượng Tồn</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập số lượng tồn kho..." 
                                        type="number"
                                    />
                                    <p className={style.errorProduct}>{errors.price?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Mô Tả</span><br />
                                    <textarea
                                        className={style.inputProduct}
                                        placeholder="Mô tả sản phẩm..." 
                                    />
                                </div>
                                <div className={style.modalFooter}>
                                    <input type="submit" value={isEditing ? 'Sửa' : 'Thêm'} className={style.inputSubmit} />
                                    <Button variant="outlined" color="error" size="small" sx={{ fontSize: '15px' }} onClick={handleClose}>Hủy</Button>
                                </div>
                            </form>
                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default Product;