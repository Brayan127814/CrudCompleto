const api_url = 'http://localhost:5000/users'


async function fetchUsers() {
    try {
        const response = await fetch(api_url)
        const usersList = await response.json()


        const producstList = document.getElementById('products-list')

        producstList.innerHTML = ''

        usersList.forEach(user => {
            const row = document.createElement('tr')
            row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteUser(${user.id})">Eliminar</button>
            </td>
        `;
            producstList.appendChild(row)


        });

    } catch (error) {
        console.error('Error al obtener los productos', error);
    }
}

//manejo de formulario para la creacion de usuairios
document.getElementById('create-form').addEventListener('submit', async (event) => {

    event.preventDefault()//pàra prevenir que la pagina se cargue
    let name = document.getElementById('create-name').value
    let email = document.getElementById('create-email').value

    console.log(name)
    console.log(email)
    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        })
        const data = await response.json()
        console.log('usurio creado ', data)
        

    } catch (error) {
        console.log('Error al intentar crear dato')
    }
})
//manejo de formulario para actualizar datos de usuario

document.getElementById('update-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const id = parseInt(document.getElementById('update-id').value)
    const name = document.getElementById('update-name').value
    const email = document.getElementById('update-email').value


    if (isNaN(id) || id <= 0) return
    console.log(id)
    console.log(name)
    console.log(email)

    try {
        const response = await fetch(`${api_url}/${id}`, {
            method: `PUT`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        })
        // Verifica si la respuesta fue exitosa (códigos 200-299)
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        console.log('Dato actualizado')
        fetchUsers()
    } catch (error) {
        console.log(error)
        console.log('Error al intentar al actualizar datos')

    }

})


//funcion para  eliminar datos
async function deleteUser(id) {
    try {
        const response = await fetch(`${api_url}/${id}`,
            {
                method: 'DELETE',

            }
        )

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json()
        console.log('dato eliminado')
        fetchUsers()
    } catch (error) {

    }


}

//Boton par mostrar lista se usuarios

let btnAbrir = document.getElementById('btn-abrir')
btnAbrir.addEventListener('click', async (event) => {

    event.preventDefault()
    await fetchUsers()
})