//Abrir http (metodo, url)

//CRUD      -   Metodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Fetch API

const obtenerUsuario = async () => await fetch("https://alurageek-e-commerce.onrender.com/users").then(respuesta => respuesta.json());

const crearUsuario = async (usuario, nombre, email, contraseña) => {
    return await fetch("https://alurageek-e-commerce.onrender.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({usuario, nombre, email, contraseña, id: uuid.v4() }),
    });
};

export const userServices = {
    obtenerUsuario,
    crearUsuario
}