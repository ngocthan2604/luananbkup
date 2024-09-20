"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Kết nối bảng Product với bảng Sales qua khóa ngoại product_id
            Product.hasMany(models.Sales, {
                foreignKey: 'product_id',
                as: 'salesData',
            });
        }
    }

    Product.init(
        {
            product_name: {
                type: DataTypes.STRING(255), // VARCHAR(255) cho tên sản phẩm
                allowNull: false,
            },
            unit_price: {
                type: DataTypes.DECIMAL(10, 2), // Decimal(10,2) cho giá đơn vị
                allowNull: false,
            },
            stock_level: {
                type: DataTypes.DECIMAL(10, 2), // Decimal(10,2) cho số lượng tồn kho
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING(255), // VARCHAR(255) cho mô tả
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
