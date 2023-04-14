import { productServices } from "../service/product-service.js";      

// const obtenerInformacion = async () => {
//     const url = new URL(window.location);
//     const id = url.searchParams.get("id");

//     if(id == null){
//         window.location.href = "./productos.html";
//     }

//     const imagenProducto = document.querySelector("[data-imagenProducto]");
//     const categoria = document.querySelector("[data-categoria]");
//     const nombre = document.querySelector("[data-nombre]");
//     const precio = document.querySelector("[data-precio]");
//     const descripcion = document.querySelector("[data-descripcion]");

//     try{
//         const producto = await productServices.detalleProducto(id);
//         if(producto.nombre && producto.categoria && producto.url && producto.precio && producto.descripcion){
//             imagenProducto.value = producto.url;
//             categoria.value = producto.categoria;
//             nombre.value = producto.nombre;
//             precio.value = producto.precio;
//             descripcion.value = producto.descripcion;
//         } else{
//             throw new Error();
//         }
//     } catch(error){
//         window.location.href = "./productos.html"
//     }
// };

// obtenerInformacion();

const mostrarDetalle = (id, nombre, categoria, url, precio, descripcion) => {
    const linea = document.createElement("div");
    linea.classList.add("detalleProducto__container");
    const contenido = `
        <div class="detalleProducto-img__container">
            <img class="imgProducto" data-imgProducto src="${url}" alt="${nombre}">
        </div>
        <div class="detalleProducto-info__container">
            <div class="nombreProducto__container" data-nombre>
                ${nombre}
            </div>
            <div class="categoriaProducto__container" data-categoria>
                ${categoria}
            </div>
            <div class="precioProducto__container" data-precio>
                $${precio}
            </div>
            <div class="descripcionProducto__container" data-descripcion>
                ${descripcion}
            </div>  
        </div>
    `;
    linea.innerHTML = contenido;
    return linea;
}

const urlPagina = new URL(window.location);
const id = urlPagina.searchParams.get("id");

const detalleProducto = document.querySelector("[data-detalleProducto]");

productServices.detalleProducto(id).then((producto) => {
    const productoSeleccionado = mostrarDetalle(producto.id, producto.nombre, producto.categoria, producto.url, producto.precio, producto.descripcion);
    if(productoSeleccionado){
        detalleProducto.appendChild(productoSeleccionado);
    };
});