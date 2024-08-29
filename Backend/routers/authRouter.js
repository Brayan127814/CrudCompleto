const express = require('express')
const route = express.Router()
const authControl = require('../controller/authControllers')

route.post('/', authControl.createUsers)
route.get('/', authControl.getUsers)
route.get('/:id', authControl.getUsersID)
route.put('/:id', authControl.updateUsers)
route.delete('/:id', authControl.deleteUsers)


module.exports = route