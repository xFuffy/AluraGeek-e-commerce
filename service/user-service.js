//Abrir http (metodo, url)

//CRUD      -   Metodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Fetch API

const obtenerUsuario = () => fetch("http://localhost:3000/users").then(respuesta => respuesta.json());

const listaUsuarios = () => fetch("http://http://localhost:3000/users").then(respuesta => respuesta.json());

const crearUsuario = (usuario, nombre, email, contraseña) => {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario, nombre, email, contraseña, id: uuid.v4() }),
    });
};


export const userServices = {
    obtenerUsuario,
    listaUsuarios,
    crearUsuario
}