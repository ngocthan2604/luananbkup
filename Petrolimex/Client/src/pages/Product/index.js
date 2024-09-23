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

import {apiGetAllProducts,apiCreateProduct,apiEditProduct,apiDeleteProduct } from '@/services/apis'

function Product() {
    const [open, setOpen] = useState(false);
    const [isDialog, setIsDialog] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [products, setProducts] = useState([]);
    const [currentProduct, setCurrentProduct] = useState(null);
    const [selectedProductId, setSelectedProductId] = useState(null);

    const schema = yup.object().shape({
        productName: yup.string().required("Tên sản phẩm là bắt buộc!"),
        unitPrice: yup.number().typeError("Đơn giá phải là một số!").required("Đơn giá là bắt buộc!").positive("Đơn giá phải là số dương!"),
        stockLevel: yup.number().typeError("Số lượng tồn phải là một số!").required("Số lượng tồn là bắt buộc!").min(0, "Số lượng tồn phải là số không hoặc lớn hơn!"),
        description: yup.string(),
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleAddProduct = () => {
        setIsEditing(false);
        setCurrentProduct(null);
        setOpen(true);
    }

    const handleEditProduct = (product) => {
        setIsEditing(true);
        setCurrentProduct(product);
        setOpen(true);
        reset({
            productName: product.product_name,
            unitPrice: product.unit_price,
            stockLevel: product.stock_level,
            description: product.description,
        });
    }

    const handleClose = () => {
        setOpen(false);
        reset({
            productName: "",
            unitPrice: "",
            stockLevel: "",
            description: "",
        });
    }

    const handleOpenDialog = (productId) => {
        setSelectedProductId(productId);
        setIsDialog(true);
    };

    const handleCloseDialog  = () => {
        setIsDialog(false);
        setSelectedProductId(null)
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await apiGetAllProducts();
                setProducts(response.data.data); 
            } catch (error) {
                console.log("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);

    const onSubmit = async (data) => {
        try {
            const productData = {
                product_name: data.productName,
                unit_price: data.unitPrice,
                stock_level: data.stockLevel,
                description: data.description,
            };
            
            if (isEditing && currentProduct) {
                await apiEditProduct(currentProduct.id, productData);
                toast.success('Sửa sản phẩm thành công!');
                setProducts((prevProducts) =>
                    prevProducts.map((product) =>
                        product.id === currentProduct.id ? { ...product, ...productData } : product
                    )
                );
            } else {
                const response = await apiCreateProduct(productData);
                toast.success('Thêm sản phẩm mới thành công!');
                setProducts((prevProducts) => [
                    ...prevProducts,
                    { ...productData, id: response.data.data.id } 
                ]);
            }
            setOpen(false);
            reset({
                productName: "",
                unitPrice: "",
                stockLevel: "",
                description: "",
            });
        } catch (error) {
            console.error("Lỗi khi gửi dữ liệu:", error);
            toast.error('Có lỗi xảy ra khi gửi dữ liệu!');
        }
    };    

    const handleDeleteProduct = async () => {
        try {
            if (selectedProductId) {
                await apiDeleteProduct(selectedProductId);
                toast.success("Xóa sản phẩm thành công!");
                setProducts(products.filter((product) => product.id !== selectedProductId));
                handleCloseDialog();
            }
        } catch (error) {
            toast.error("Xóa sản phẩm thất bại!");
            console.error("Error deleting product:", error);
        }
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
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.product_name}</td>
                                <td>{parseFloat(product.unit_price).toFixed(2)}</td>
                                <td>{parseFloat(product.stock_level).toFixed(2)}</td>
                                <td>{product.description}</td>
                                <td>
                                    <Button className={style.btnEdit} variant="contained" onClick={() => handleEditProduct(product)}>Sửa</Button>
                                    <Button className={style.btnRemove} variant="outlined" color="error" onClick={() => handleOpenDialog(product.id)}>
                                        Xóa
                                        {isDialog && selectedProductId === product.id && (
                                            <div className={style.dialog} onClick={(e) => { e.stopPropagation() }}>
                                                <h4><ErrorOutline style={{ fontSize: 18, color: '#1976d2', margin: '0 5px 2px 0' }} /> Xác nhận </h4>
                                                <p>Bạn chắc chắn xóa sản phẩm này?</p>
                                                <span style={{ backgroundColor: 'red' }} onClick={handleDeleteProduct}>Xóa</span>
                                                <span style={{ backgroundColor: '#1976d2' }} onClick={handleCloseDialog}>Hủy</span>
                                            </div>
                                        )}
                                    </Button>
                                </td>
                            </tr>
                        ))}
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={style.formGroup}>
                                    <span>Tên Sản Phẩm</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập tên sản phẩm..." 
                                        type="text"
                                        {...register("productName")}
                                    />
                                    <p className={style.errorProduct}>{errors.productName?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Đơn Giá</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập đơn giá..." 
                                        type="number"
                                        {...register("unitPrice")}
                                    />
                                    <p className={style.errorProduct}>{errors.unitPrice?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Số Lượng Tồn</span><br />
                                    <input
                                        className={style.inputProduct}
                                        placeholder="Nhập số lượng tồn kho..." 
                                        type="number"
                                        {...register("stockLevel")}
                                    />
                                    <p className={style.errorProduct}>{errors.stockLevel?.message}</p>
                                </div>
                                <div className={style.formGroup}>
                                    <span>Mô Tả</span><br />
                                    <textarea
                                        className={style.inputProduct}
                                        placeholder="Mô tả sản phẩm..." 
                                        {...register("description")}
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