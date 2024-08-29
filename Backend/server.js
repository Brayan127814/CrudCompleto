const express = require('express')
const itemRoute = require('./routers/authRouter')
const cors = require('cors')
const PORT = process.env.PORT || 5000
const app = express()


app.use(cors())
app.use(express.json())


app.use('/users', itemRoute)


app.listen(PORT, () => {
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})

