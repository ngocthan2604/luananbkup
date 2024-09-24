"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("sales", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'users', // name of the target table
                    key: 'id' // key in the target table
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL',
            },
            problem: {
                type: Sequelize.STRING,
            },
            file: {
                type: Sequelize.BLOB,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            date: {
                type: Sequelize.STRING,
            },
            quantity: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            product_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'products', // name of the target table
                    key: 'id' // key in the target table
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("sales");
    },
};
