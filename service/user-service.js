//Abrir http (metodo, url)

//CRUD      -   Metodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Fetch API

const obtenerUsuario = async () => await fetch("http://localhost:3000/users").then(respuesta => respuesta.json());

const detalleUsuario = async (id) => {
    const respuesta = await fetch(`http://localhost:3000/users/${id}`);
    return await respuesta.json();
}

const crearUsuario = async (usuario, nombre, email, contraseña) => {
    return await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario, nombre, email, contraseña, id: uuid.v4() }),
    });
};


export const userServices = {
    obtenerUsuario,
    detalleUsuario,
    crearUsuario
}