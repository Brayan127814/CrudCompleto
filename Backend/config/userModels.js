const pool = require('../config/db')



//crea users
async function createUsers(name, email) {

    const [results] = await pool.execute('INSERT INTO users(name,email) VALUES (?,?) ', [name, email])
    return results.insertId
}
//obtenere usuarios

async function getUsers() {

    const [row] = await pool.execute('SELECT * FROM users')
    return row
}

//obtener users por medio del ID
async function getUsersID(id) {

    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ? ', [id])
    return rows[0]
}

//actualizar datos de usuario
async function updateUsers(id, name, email) {

    await pool.execute('UPDATE users SET name = ? , email=? WHERE id =?', [name, email, id])
}

//Eliminar un registro de usuario
async function deleteUsers(id) {
    await pool.execute('DELETE FROM users WHERE id = ? ', [id])
}

module.exports = {
    createUsers,
    getUsers,
    getUsersID,
    updateUsers,
    deleteUsers
}