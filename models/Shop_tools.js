const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Shops = require("./Shops");
const Tool = require("./Tools");

const ShopTool = sequelize.define("shop_tool",
    {
        rent_price: {
            type: DataTypes.DECIMAL(15, 2),
        },

        tool_price: {
            type: DataTypes.DECIMAL(15, 2),
        }

    },
    {
        freezeTableName: true
    }
);

Shops.belongsToMany(Tool, {through:ShopTool})
Tool.belongsToMany(Shops, {through:ShopTool})

Shops.hasMany(ShopTool)
ShopTool.belongsTo(Shops)

Tool.hasMany(ShopTool)
ShopTool.belongsTo(Tool)

module.exports = ShopTool