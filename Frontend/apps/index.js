import { crearUsers, deleteUser, fetchUsers, updateUsers } from './api.mjs'
import { validateForm } from './validation.mjs'
document.getElementById('show-create-form-btn').addEventListener('click', () => {
    document.getElementById('create-form-container').classList.remove('hidden');
    document.getElementById('update-form-container').classList.add('hidden');
});

document.getElementById('show-update-form-btn').addEventListener('click', () => {
    document.getElementById('update-form-container').classList.remove('hidden');
    document.getElementById('create-form-container').classList.add('hidden');
});

//mostrar todos los usuarios

async function mostrarUsers() {

    //contenedor donde se mostraran los registros
    const users = await fetchUsers()
    const userList = document.getElementById('users-list')
    userList.innerHTML = ''

    users.forEach(element => {

        const row = document.createElement('tr')
        row.innerHTML =
            `
         <td>${element.id}</td>
             <td>${element.name}</td>
             <td>${element.email}</td>
              <td>
                        <button type="button" class="btn btn-warning btn-sm update-btn" data-id="${element.id}"> Actualizar</button>
                        <button type="button" class="btn btn-danger btn-sm delete-btn" data-id="${element.id}">Eliminar</button>


                    </td>
        `
        userList.appendChild(row)
        //Accion para eliminar registro de usuaros
        row.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', deleteUsers)
        })
        //Accion para actualizar registros de 
        row.querySelectorAll('.update-btn').forEach(element => {
            element.addEventListener('click', update)
        })

    });
}


//manejo de formulario para la creacion de un registro
document.getElementById('create-form-container').addEventListener('submit', async (e) => {

    e.preventDefault()
    const nameusers = document.getElementById('create-name').value
    const emailuser = document.getElementById('create-email').value

    if (!validateForm(nameusers, emailuser)) return
    const registro = await crearUsers(nameusers, emailuser)

    if (registro) {
        alert('Registro creado')
        mostrarUsers()
    }

})

//Manejo de formulario para la actualizacion de registro
async function update(e) {
    e.preventDefault()
    const userID = e.target.getAttribute('data-id')
    const name = document.getElementById('update-name').value
    const email = document.getElementById('update-email').value
    // Verifica el valor del email
    if (!validateForm(name, email)) return
    const result = await updateUsers(userID, name, email)

    if (result) {
        alert('Registro Actualizado')
        mostrarUsers()
    }



}
//Manejo de formulario  para la eliminacion de registro

async function deleteUsers(e) {

    e.preventDefault()
    const userID = e.target.getAttribute('data-id')
    const result = await deleteUser(userID)
    if (result) {
        alert('Registro eliminado')

        mostrarUsers()
    }

}
mostrarUsers()