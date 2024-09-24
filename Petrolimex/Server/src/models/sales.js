"use strict";
const { Sequelize, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Sales extends Model {
        static associate(models) {
            // Sales belongs to User
            Sales.belongsTo(models.User, {
                foreignKey: 'userId',
                as: "saleData",
            });
            // Sales belongs to Product
            Sales.belongsTo(models.Product, {
                foreignKey: 'product_id',
            });
        }
    }

    Sales.init(
        {
            userId: DataTypes.INTEGER,
            problem: DataTypes.STRING,
            file: DataTypes.BLOB,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE,
            date: DataTypes.STRING,
            quantity: DataTypes.DECIMAL(10, 2),
            product_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Sales",
        }
    );

    return Sales;
};
