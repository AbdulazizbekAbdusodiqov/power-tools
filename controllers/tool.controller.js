const errorHandler = require("../helpers/errorHandler")
const Tool = require("../models/Tools")

const createTool = async (req, res) => {
    try {
        
        const {
            name,
            brand,
            description
        } = req.body

        const newTool = await Tool.create({
            name,
            brand,
            description
        })

        return res.status(201).send(newTool);

    } catch (error) {
     errorHandler(error, res)   
    }
}

const updateTool = async (req, res) => {
    try {
        
        const {id} = req.params

        const {
            name,
            brand,
            description
        } = req.body
        
        const updatedTool = await Tool.update({name,brand,description},{
            where : {id},
            returning : true
        });
        
        return res.status(201).send(updatedTool[1][0]);
        
    } catch (error) {
        errorHandler(error, res)   
    }
}

const getTools = async (req, res) => {
    try {
        
        const tools = await Tool.findAll()

        return res.status(201).send(tools);

    } catch (error) {
     errorHandler(error, res)   
    }
}

const getToolById = async (req, res) => {
    try {
        
        const {id} = req.params

        const tools = await Tool.findOne({id})

        return res.status(201).send(tools);

    } catch (error) {
     errorHandler(error, res)   
    }
}

const deleteTool = async (req, res) => {
    try {
        
        const {id} = req.params

        await Tool.destroy({where : {id}})

        return res.status(201).send({msg : "deleted"});

    } catch (error) {
     errorHandler(error, res)   
    }
}

module.exports = {
    createTool,
    getTools,
    getToolById,
    updateTool,
    deleteTool
}