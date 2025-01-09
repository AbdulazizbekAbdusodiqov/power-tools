const errorHandler = require("../helpers/errorHandler")
const Admin = require("../models/Admin")




const createAdmin = async (req, res) => {
    try {
        const { first_name, last_name, email, phone_number } = req.body

        const oldAdmin = await Admin.findOne({ where: { email, phone_number } })

        console.log(oldAdmin);

        if (oldAdmin?.dataValues) {
            return res.status(400).send({ message: "bu email bilan oldin ro'yxatdan o'tilgan" })
        }

        const newAdmin = await Admin.create({ first_name, last_name, email, phone_number })

        res.status(201).send(newAdmin)

    } catch (error) {
        errorHandler(error, res)
    }
}



const updateAdmin = async (req, res) => {
    try {
        const id = req.params.id
        const { first_name, last_name, email, phone_number } = req.body

        const updatedAdmin = await Admin.update({ first_name, last_name, email, phone_number },
            {
                where: { id },
                returning: true
            }
        );

        res.status(201).send(updatedAdmin[1][0])

    } catch (error) {
        errorHandler(error, res)
    }
}


const getAdmins = async (req, res) => {
    try {

        const admins = await Admin.findAll()

        return res.send(admins)

    } catch (error) {
        errorHandler(error, res)
    }
}

const getAdminById = async (req, res) => {
    try {

        const id = req.params.id
        const admin = await Admin.findByPk(id)

        return res.send(admin)

    } catch (error) {
        errorHandler(error, res)
    }
}

const deleteAdmin = async (req, res) => {
    try {

        const id = req.params.id
        const deletedAdmin = await Admin.destroy({
            where : {id}
        })

        if(!deletedAdmin){
            return res.status(400).send({message : "admin not found"})
        }

        return res.sendStatus(200) //oddiy send qisam error berdi invalid status kod db

    } catch (error) {
        errorHandler(error, res)
    }
}




module.exports = {
    createAdmin,
    updateAdmin,
    getAdmins,
    getAdminById,
    deleteAdmin
}