import conecction from './db.mjs'
import connection from './db.mjs'



//crea users
export async function createUsers(name, email) {

    const [results] = await connection.execute('INSERT INTO users(name,email) VALUES (?,?) ', [name, email])
    return results.insertId
}
//obtenere usuarios

export async function getUsers() {

    const [row] = await conecction.execute('SELECT * FROM users')
    return row
}

//obtener users por medio del ID
export async function getUsersID(id) {

    const [rows] = await connection.execute('SELECT * FROM users WHERE id = ? ', [id])
    return rows[0]
}

//actualizar datos de usuario
export async function updateUsers(id, name, email) {

    await connection.execute('UPDATE users SET name = ? , email=? WHERE id =?', [name, email, id])
}

//Eliminar un registro de usuario
export async function deleteUsers(id) {
    await connection.execute('DELETE FROM users WHERE id = ? ', [id])
}

