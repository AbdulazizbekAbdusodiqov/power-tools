const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Admin = sequelize.define("admin",
    {
        id: {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        first_name : {
            type: DataTypes.STRING(30),
        },
        last_name : {
            type: DataTypes.STRING(30),
        },
        email : {
            type : DataTypes.STRING
        },
        phone_number : {
            type : DataTypes.STRING(15)
        }        
    },
    {
        freezeTableName : true
    }
);

module.exports = Admin