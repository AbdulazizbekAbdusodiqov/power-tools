const { DataTypes } = require("sequelize")
const sequelize = require("../config/db");
const Owner = require("./Owner");

const Shops = sequelize.define("shops", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING(50),
    },
    address :{
        type: DataTypes.STRING,
    },
    phone_number:{
        type : DataTypes.STRING(15)
    },
    location :{
        type: DataTypes.STRING,
    }
},
{
    freezeTableName : true
});

Shops.belongsTo(Owner)
Owner.hasMany(Shops)

module.exports = Shops