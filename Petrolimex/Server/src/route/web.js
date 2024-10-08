import express from "express";

import {
  useCheckErrorToken,
} from "../middleware/index";



import {
  handleGetAllUser, handleLoginUser, handleRegisterUser,
  handleGetProfileUser, handleCreateNotication, handleCreateShift,
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
} from '../controllers/useController'

///// router
let router = express.Router();

let initWebRoutes = (app) => {

  /// auth
  router.post("/api-register-user", handleRegisterUser);
  router.post("/api-login", handleLoginUser);
  router.post("/api-logout", useCheckErrorToken, handleLogoutUser);

  /// profile
  router.get(
    "/api-get-user-by-id",
    useCheckErrorToken,
    handleGetProfileUser
  );

  router.get(
    "/api-get-all-users",
    useCheckErrorToken,
    // useCheckRoles,
    handleGetAllUser
  );

  router.post('/api-crate-notification', useCheckErrorToken, handleCreateNotication)
  router.get('/api-get-all-notification', useCheckErrorToken, handleGetAllNotification)

  router.post('/api-create-shifts', useCheckErrorToken, handleCreateShift)

  router.delete('/api-delete-user', useCheckErrorToken, handleDeleteUser)

  router.post('/api-create-timekeeping', useCheckErrorToken, handleCreateTimeKeeing)
  router.get('/api-get-list-timekeeing', useCheckErrorToken, handleGetAllTimeKeeing)
  router.post('/api-count-salary', useCheckErrorToken, handleCountSalary)
  router.get('/api-get-all-salary', useCheckErrorToken, handleGettAllSalary)
  router.put('/api-edit-role', useCheckErrorToken, handleEditRole)

  router.post('/api-create-sale', useCheckErrorToken, handleCreateSale)
  router.get('/api-get-all-sales', useCheckErrorToken, handleGetAllSale)
  router.post('/api-reset-sales', useCheckErrorToken, handleResetSales)
  router.get('/api-get-use-of-id', useCheckErrorToken, handleGetUserById)
  router.put('/api-edit-user', useCheckErrorToken, handleEdittUserById)
  router.post('/api-create-report', useCheckErrorToken, handleCreateReport)

  router.get('/api-get-all-products', useCheckErrorToken, handleGetAllProducts);
  router.post('/api-create-product', useCheckErrorToken, handleCreateProduct);
  router.put('/api-update-product/:id', useCheckErrorToken, handleUpdateProduct);
  router.delete('/api-delete-product/:id', useCheckErrorToken, handleDeleteProduct);

  router.get('/api-search-timekeeping', useCheckErrorToken, handleSearchTimekeeping);

  return app.use("/", router);
};

module.exports = initWebRoutes;
