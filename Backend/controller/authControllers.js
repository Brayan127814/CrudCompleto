
const userModels = require('../config/userModels')

//crear usuarios

async function createUsers(req, res) {

    try {
        const { name, email } = req.body
        const response = await userModels.createUsers(name, email)
        res.status(201).json({ id: response, name, email })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//obtenr usuarios
async function getUsers(req , res) {

    try {
        const results = await userModels.getUsers()
        res.status(201).json(results)
    } catch (error) {
        res.status(501).json({ mensaje: 'Error interno del servidor' })

    }
}

//obtener datos de usuarios por medio del id
async function getUsersID(req, res) {
    try {
        const results = await userModels.getUsersID(req.params.id)
        if (!results) {
            res.status(404).json({mensaje:'Not found'})
        }
        res.status(201).json({ results })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//Actualizar datos de usuario
async function updateUsers(req, res) {
    try {
        const { name, email } = req.body
        await userModels.updateUsers(req.params.id, name, email)
        res.status(201).json({ mensaje: 'Datos actualizados' })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//elimar datos de usuario
async function deleteUsers(req, res) {
    try {
        await userModels.deleteUsers(req.params.id)
        res.status(201).json({ mensaje: 'Datos eliminados' })
    } catch (error) {
        res.status(5000).json({ mensaje: 'Error interno del servidor' })
    }
}

module.exports = {
    createUsers,
    getUsers,
    getUsersID,
    updateUsers,
    deleteUsers
}