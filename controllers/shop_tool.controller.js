const errorHandler = require("../helpers/errorHandler")
const ShopTool = require("../models/Shop_tools")
const Shops = require("../models/Shops")
const Tool = require("../models/Tools")

const createShopTool = async (req, res) => {
    try {

        const {
            rent_price,
            tool_price,
            shopId,
            toolId
        } = req.body

        const shopTool = await ShopTool.create({
            rent_price,
            tool_price,
            shopId,
            toolId
        })

        return res.status(201).send(shopTool);

    } catch (error) {
        errorHandler(error, res)
    }
}

const updateShopTool = async (req, res) => {
    try {

        const { id } = req.params

        const {
            rent_price,
            tool_price,
            shopId,
            toolId

        } = req.body

        const updatedShopTool = await ShopTool.update({
            rent_price,
            tool_price,
            shopId,
            toolId
        }, {
            where: { id },
            returning: true
        });

        return res.status(201).send(updatedShopTool[1][0]);

    } catch (error) {
        errorHandler(error, res)
    }
}

const getShopTools = async (req, res) => {
    try {

        const ShopTools = await ShopTool.findAll({
            include:
                [Shops, Tool]
        })

        return res.status(201).send(ShopTools);

    } catch (error) {
        errorHandler(error, res)
    }
}

const getShopToolById = async (req, res) => {
    try {

        const { id } = req.params

        const ShopTools = await ShopTool.findOne({ id })

        return res.status(201).send(ShopTools);

    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteShopTool = async (req, res) => {
    try {

        const { id } = req.params

        await ShopTool.destroy({ where: { id } })

        return res.status(201).send({ msg: "deleted" });

    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    createShopTool,
    getShopTools,
    getShopToolById,
    updateShopTool,
    deleteShopTool
}