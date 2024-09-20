"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("products", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER(11), // Đã chỉnh lại kiểu dữ liệu thành INT(11)
            },
            product_name: {
                type: Sequelize.STRING(255), // Đã chỉnh lại kiểu dữ liệu thành VARCHAR(255)
                allowNull: false,
            },
            unit_price: {
                type: Sequelize.DECIMAL(10, 2), // Decimal(10,2) cho giá đơn vị
                allowNull: false,
            },
            stock_level: {
                type: Sequelize.DECIMAL(10, 2), // Decimal(10,2) cho số lượng tồn kho
                allowNull: false,
            },
            description: {
                type: Sequelize.STRING(255), // Đã chỉnh lại kiểu dữ liệu thành VARCHAR(255)
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("products");
    },
};
