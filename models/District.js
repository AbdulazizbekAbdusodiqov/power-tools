const sequelize = require("../config/db")


const { DataTypes} = require("sequelize")

const District = sequelize.define("district", {
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement: true,
    },
    name : {
        type : DataTypes.STRING(50),
    }
},
{
    freezeTableName: true
})


module.exports = District;