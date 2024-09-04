import { crearUsers, deleteUser, fetchUsers, updateUsers } from './api.mjs'

//Manejo de formulario para creacion de usuarios
document.getElementById('create-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('create-name').value
    const email = document.getElementById('create-email').value

    console.log(name)
    console.log(email)

    const response = await crearUsers(name, email)

    if (response) {
        console.log('Registro creado exitosamente')
        loading()
    }
})

//Manejo de formulario para la actualizacion de registros

document.getElementById('update-form').addEventListener('submit', async (e) => {

    e.preventDefault()
    const updateid = parseInt(document.getElementById('update-id').value)
    const name = document.getElementById('update-name').value
    const email = document.getElementById('update-email').value

    console.log(updateid)
    console.log(email)
    console.log(name)
    if (isNaN(updateid) || updateid <= 0) {
        return
    }
    const newData = await updateUsers(updateid, name, email)

    if (newData) {
        console.log('Registro actualizado ')
        loading()
    }
})

async function loading() {
    const usersList = await fetchUsers()
    const listUserws = document.getElementById('products-list')
    listUserws.innerHTML = ''

    usersList.forEach(user => {
        const row = document.createElement('tr')
        row.innerHTML = `
             <td>${user.id}</td>
             <td>${user.name}</td>
             <td>${user.email}</td>
             <td>
                 <button type="button" class="btn btn-danger btn-sm delete-btn" data-id="${user.id}">
                     Eliminar
                 </button>
             </td>
        `
        listUserws.appendChild(row)
        row.querySelectorAll('.delete-btn').forEach(button => button.addEventListener('click', (e) => {
            e.preventDefault()
            deleteuser(e)
        }))
    });

}
loading()

async function deleteuser(e) {

    e.preventDefault()
    const userID = e.target.getAttribute('data-id')
    const result = await deleteUser(userID)
    if (result) {
        console.log('usuario eliminado')
    }

    loading()
}


loading()