const express = require("express")
const config = require("config")
const sequelize = require('./config/db')

const Order = require("./models/Order")

const mainRouter = require('./router/index.routes')

const app = express()
app.use(express.json())

app.use("/api", mainRouter)

const PORT = config.get("port")
async function start() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({alter : true})

        app.listen(PORT, ()=>{
            console.log("server started at: http://localhost:"+PORT)
        })
    } catch (error) {
        console.log(error);
    }
}; 
start();