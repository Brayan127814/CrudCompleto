import { createUsers, deleteUsers, getUsers, getUsersID, updateUsers } from '../config/userModels.mjs'

//crear usuarios

export async function createUsersAll(req, res) {

    try {
        const { name, email } = req.body
        const response = await createUsers(name, email)
        res.status(201).json({ id: response, name, email })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//obtenr usuarios
 export async function getUsersAll(req , res) {

    try {
        const results = await getUsers()
        res.status(201).json(results)
    } catch (error) {
        res.status(501).json({ mensaje: 'Error interno del servidor' })

    }
}

//obtener datos de usuarios por medio del id
 export async function getUsersIDAll(req, res) {
    try {
        const results = await getUsersID(req.params.id)
        if (!results) {
            res.status(404).json({mensaje:'Not found'})
        }
        res.status(201).json({ results })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//Actualizar datos de usuario
 export async function updateUsersID(req, res) {
    try {
        const { name, email } = req.body
        await updateUsers(req.params.id, name, email)
        res.status(201).json({ mensaje: 'Datos actualizados' })
    } catch (error) {
        console.error('este es el error', error)
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

//elimar datos de usuario
 export async function deleteUsersID(req, res) {
    try {
        await deleteUsers(req.params.id)
        res.status(201).json({ mensaje: 'Datos eliminados' })
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno del servidor' })
    }
}

