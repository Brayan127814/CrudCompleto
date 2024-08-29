const mysql = require('mysql2/promise')

//crear condexion a bases de datos

const conecction = mysql.createPool({

    user: 'root',
    host: 'localhost',
    database: 'my_crud_db',
    password: 'Brayan#16'
})

module.exports = conecction