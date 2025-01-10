const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Client = require("./clients");
const ShopTool = require("./Shop_tools");


const Order = sequelize.define("order",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_date: {
            type: DataTypes.DATE
        },
        period: {
            type: DataTypes.INTEGER
        },
        total_price: {
            type: DataTypes.INTEGER
        },

    },
    {
        freezeTableName: true,

    }
);

// Client.belongsToMany(ShopTool, {through:Order})
// ShopTool.belongsToMany(Client, {through:Order})

// Client.hasMany(Order)
// Order.belongsTo(Client)

// ShopTool.hasMany(Order)
// Order.belongsTo(ShopTool)

module.exports = Order