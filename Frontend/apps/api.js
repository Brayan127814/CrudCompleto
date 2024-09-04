

const api = 'http://localhost:5000/users'
//obtner todos los usuarios
async function fetchUsers() {

    try {
        const response = await fetch(api)
        if (!response.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }
        const data = await response.json()

        return data
    } catch (error) {
        console.error('error al obtener los datos')
        return []
    }

}

//obtnener usuario por medio del ID

async function getUsersID(id) {

    try {

        const response = await fetch(`${api}/${id}`)

        if (!response.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }
      
        const data = await response.json()
        return data

    } catch (error) {

    }

}

//crear usuarios

async function crearUsers(name, email) {
    try {
        const response = await fetch(api,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            }
        )

        if (!response.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }

        const data = await response.json()

        return data
    } catch (error) {
        console.error('error interno del servidor')
    }

}


//actualizar los datos del usuarios
async function updateUsers(id, name, email) {
    try {
        const response = await fetch(`${api}/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
                , body: JSON.stringify({ name, email })
            })
        if (!response.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error('Error interno del servidor')
        return null
    }

}

//eliminar datos de usuario
async function deleteUser(id) {

    try {
        const response = await fetch(`${api}/${id}`, {
            method: 'DELETE'
        })

        if (!respons.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }
        return await respons.json()

    } catch (error) {
        console.log('Error al intentar eliminar el usuario')
        return null
    }

}

export{crearUsers,getUsersID,fetchUsers,updateUsers,deleteUser}