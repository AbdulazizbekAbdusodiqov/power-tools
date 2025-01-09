const sequelize = require("../config/db")


const { DataTypes } = require("sequelize")

const Client = sequelize.define("client",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(50),
        },
        address: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING(15)
        },
        otp_id: {
            type: DataTypes.UUID,
        }
    },
    {
        freezeTableName: true
    }
);


module.exports = Client;