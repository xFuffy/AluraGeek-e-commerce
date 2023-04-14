//Abrir http (metodo, url)

//CRUD      -   Metodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Fetch API

const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json()); 

const obtenerProducto = async () => await fetch("http://localhost:3000/productos").then(res => res.json());

const crearProducto = async (nombre, categoria, url, precio, descripcion) => {
    return await fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id: uuid.v4(), nombre, categoria, url, precio, descripcion}),
    });
};

const eliminarProducto = (id) => {                          
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE",
    });
};

const actualizarProducto = async (nombre, categoria, url, precio, descripcion, id) => {
    try {
        const respuesta = await fetch(`http://localhost:3000/productos/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nombre, categoria, url, precio, descripcion, id }),
        });
        return respuesta;
    } catch (err) {
        return console.log(err);
    }
};

const buscarProducto = async (nombre) => await fetch(`http://localhost:3000/productos?nombre_like=${nombre}`).then(respuesta => respuesta.json());

const detalleProducto = async (id) => await fetch(`http://localhost:3000/productos/${id}`).then(respuesta => respuesta.json()); 

export const productServices = {
    listaProductos,
    obtenerProducto,
    crearProducto,
    eliminarProducto,
    actualizarProducto,
    buscarProducto,
    detalleProducto,
}