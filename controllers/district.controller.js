const errorHandler = require("../helpers/errorHandler")
const District = require("../models/District")

const createDitrict = async (req, res) => {
    try {

        const { name } = req.body

        const newDistrict = await District.create({ name })

        return res.status(201).send(newDistrict)

    } catch (error) {
        errorHandler(error, res)
    }
}

const getDistricts = async (req, res) => {
    try {

        const districts = await District.findAll()

        return res.send(districts)

    } catch (error) {
        errorHandler(error, res)
    }
}


const getDistrictById = async (req, res) => {
    try {

        const id = req.params.id

        const district = await District.findByPk(id)

        return res.send(district)

    } catch (error) {
        errorHandler(error, res)
    }
}


const updateDistrict = async (req, res) => {
    try {

        const id = req.params.id
        const { name } = req.body
        const updatedDistrict = await District.update({ name }, {
            where: { id },
            returning: true
        })

        return res.send(updatedDistrict[1][0])

    } catch (error) {
        errorHandler(error, res)
    }
}



const deleteDistrict = async (req, res) => {
    try {

        const id = req.params.id
        await District.destroy({ where: { id } })

        return res.send({ message: "deleted" })

    } catch (error) {
        errorHandler(error, res)
    }
}


module.exports = {
    createDitrict,
    getDistricts,
    getDistrictById,
    updateDistrict,
    deleteDistrict
}