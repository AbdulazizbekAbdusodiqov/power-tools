const errorHandler = require("../helpers/errorHandler")
const Owner = require("../models/Owner")
const Shops = require("../models/Shops")


const createOwner = async (req, res) => {
    try {

        const { name, phone_number } = req.body
        const newOwner = await Owner.create({
            name, phone_number
        })

        return res.status(201).send(newOwner)

    } catch (error) {
        errorHandler(error, res)
    }
}


const getOwners = async (req, res) => {
    try {
        const owners = await Owner.findAll({include : Shops})
        return res.send(owners)
    } catch (error) {
        errorHandler(error, res)
    }
}


const getOwnerById = async (req, res) => {
    try {
        const id = req.params.id

        const owner = await Owner.findByPk(id)

        return res.send(owner)
    } catch (error) {
        errorHandler(error, res)
    }
}


const updateOwner = async (req, res) => {
    try {
        const id = req.params.id
        const { name, phone_number } = req.body

        const updatedOwner = await Owner.update(
            { name, phone_number },
            {
                where: { id },
                returning: true
            }
        );


        return res.send(updatedOwner[1][0])
    } catch (error) {
        errorHandler(error, res)
    }
}



const deleteOwner = async (req, res) => {
    try {
        const id = req.params.id

        await Owner.destroy({ where: { id } });

        return res.send({ message: "deleted success" })

    } catch (error) {
        errorHandler(error, res)
    }
}


module.exports = {
    createOwner,
    getOwners,
    getOwnerById,
    updateOwner,
    deleteOwner
}