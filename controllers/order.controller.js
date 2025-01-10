const errorHandler = require("../helpers/errorHandler")
const Order = require("../models/Order")

const createOrder = async (req, res) => {
    try {
        
        const {
            clientId,
            shop_toolId,
            order_date,
            period,
            total_price
        } = req.body

        const newOrder = await Order.create({clientId, shop_toolId, order_date, period, total_price});

        return res.status(201).send(newOrder)  


    } catch (error) {
        errorHandler(error, res)
    }
}

const getOrders = async(req, res) => {
    try {
        
        const orders = await Order.findAll()

        return res.send(orders)

    } catch (error) {
        errorHandler(error, res)
    }
}

const getOrderById = async(req, res) => {
    try {
        

        const order = await Order.findByPk(req.params.id)

        return res.send(order)

    } catch (error) {
        errorHandler(error, res)
    }
}

const updateOrder = async(req, res) => {
    try {
        const id = req.params.id
                
        const {
            clientId,
            shop_toolId,
            order_date,
            period,
            total_price
        } = req.body
        
        
        const updatedOrder = await Order.update({
            clientId,
            shop_toolId,
            order_date,
            period,
            total_price
        },{
            where : {id},
            returning : true
        });

        return res.send(updatedOrder[1][0])

    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteOrder = async(req, res) => {
    try {
        const id = req.params.id

        
        const deletedOrder = await Order.update({
            where : {id},
            returning : true
        });

        if(deletedOrder <= 0){
            return res.status(400).send({message : "order not found"})
        }

        return res.send(deletedOrder)

    } catch (error) {
        errorHandler(error, res)
    }
}



module.exports = {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
}