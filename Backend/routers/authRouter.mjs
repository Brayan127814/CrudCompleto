import Router from 'express'

import { createUsersAll, deleteUsersID, getUsersAll, getUsersIDAll, updateUsersID } from '../controller/authControllers.mjs'


const route = Router()

route.post('/', createUsersAll)
route.get('/', getUsersAll)
route.get('/:id', getUsersIDAll)
route.put('/:id', updateUsersID)
route.delete('/:id', deleteUsersID)

export default route