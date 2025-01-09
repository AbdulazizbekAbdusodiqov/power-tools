const errorHandler = require('../helpers/errorHandler');
const Client = require('../models/clients')

const createClient = async (req, res) => {
    try {

        const { name, phone_number, address, } = req.body
        const newClient = await Client.create({ name, phone_number, address })
        console.log(newClient);

        return res.status(201).send(newClient)

    } catch (error) {
        errorHandler(error, res)
    }
}


const getClients = async (req, res) => {
    try {

        const clients = await Client.findAll()

        return res.send(clients)

    } catch (error) {
        errorHandler(error, res)
    }
}

const getClientById = async (req, res) => {
    try {
        const id = req.params.id

        const client = await Client.findByPk(id)

        return res.send(client)

    } catch (error) {
        errorHandler(error, res)
    }
}
const updateClient = async (req, res) => {
    try {
        const id = req.params.id
        const { name, phone_number, address, } = req.body

        const [affectedRows, updatedClients] = await Client.update(
            { name, phone_number, address },
            {
                where: { id },
                returning: true,
            }
        );

        return res.send(updatedClients)

    } catch (error) {
        errorHandler(error, res)
    }
}


const deleteClient = async (req, res) => {
    try {
        const id = req.params.id

        await Client.destroy({ where: { id } })

        return res.send({ message: "deleted success" })

    } catch (error) {
        errorHandler(error, res)
    }
}

module.exports = {
    createClient,
    getClients,
    getClientById,
    updateClient,
    deleteClient
}