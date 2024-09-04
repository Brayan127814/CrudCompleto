

const api = 'http://localhost:5000/users'
//obtner todos los usuarios
export async function fetchUsers() {

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

export async function getUsersID(id) {

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

export async function crearUsers(name, email) {
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
export async function updateUsers(id, name, email) {
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
        console.error('este es el error '+ error)
        console.error('Error interno del servidor')
        return null
    }

}

//eliminar datos de usuario
export async function deleteUser(id) {

    try {
        const response = await fetch(`${api}/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            throw new Error(`Error en la solicitud ${response.status}`)
        }
        return await response.json()

    } catch (error) {
        console.error('este es el error ', error)
        console.log('Error al intentar eliminar el usuario')
        return null
    }

}


