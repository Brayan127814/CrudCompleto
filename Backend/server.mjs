import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import route, { } from './routers/authRouter.mjs'
const app = express()
app.use(cors())
app.use(express.json())


app.use('/users', route)
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})

