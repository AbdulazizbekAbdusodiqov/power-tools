const errorHandler = require('../helpers/errorHandler');
const Owner = require('../models/Owner');
const Shops = require('../models/Shops');
const Tool = require('../models/Tools');

const createShop = async (req, res) => {
    try {

        const { name, address, phone_number, location, ownerId } = req.body
        const newShop = await Shops.create({ name, phone_number, address, location, ownerId })

        return res.status(201).send(newShop)

    } catch (error) {
        errorHandler(error, res)
    }
}


const getShops = async (req, res) => {
    try {

        const shops = await Shops.findAll({
            include: [
                {
                    model: Owner,
                    attributes: ["name", "phone_number"],
                    required : true 
                },
                {
                    model:Tool
                }
            ],
            attributes: ["id", "name", "address"],
        })

        return res.send(shops)

    } catch (error) {
        errorHandler(error, res)
    }
}

const getShopById = async (req, res) => {
    try {
        const id = req.params.id

        const shop = await Shops.findByPk(id)

        return res.send(shop)

    } catch (error) {
        errorHandler(error, res)
    }
}
const updateShop = async (req, res) => {
    try {
        const id = req.params.id
        const { name, phone_number, address, location } = req.body

        const [affectedRows, updatedShop] = await Shops.update(
            { name, phone_number, address, location },
            {
                where: { id },
                returning: true,
            }
        );

        return res.send(updatedShop)

    } catch (error) {
        errorHandler(error, res)
    }
}


const deleteShop = async (req, res) => {
    try {
        const id = req.params.id

        await Shops.destroy({ where: { id } })

        return res.send({ message: "deleted success" })

    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    createShop,
    getShops,
    getShopById,
    updateShop,
    deleteShop
}