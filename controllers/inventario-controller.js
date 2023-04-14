import { productServices } from "../service/product-service.js";      

const mostrarAllProductos = (nombre, categoria, url, precio, descripcion, id) => {
    const linea = document.createElement("div");
    linea.classList.add("line__item");
    const contenido = `
        <div id="icons__container">
        <a data-trashIcon class="iconos" id=${id}><i class="fa-solid fa-trash"></i></a>
        <a data-pencilIcon class="iconos" href="editarProducto.html?id=${id}"><i class="fa-solid fa-pencil"></i></a>
        </div>
        <div class="line-img__container">
            <img src="${url}" alt="${nombre}" class="line__img">
        </div>
        <div class="item__title">
            <p>${nombre}</p>
        </div>
        <div class="item__price">
            <p>$${precio}</p>
        </div>
        <a href="descripcionProducto.html?id=${id}">
            <div class="item__description">Ver producto</div>
        </a>
    `;
    linea.innerHTML = contenido;
    
    const btnEliminar = linea.querySelector("[data-trashIcon]");
    btnEliminar.addEventListener("click", () => {
        const id = btnEliminar.id;
        productServices.eliminarProducto(id).then((respuesta) => {
            console.log(respuesta);
        }).catch((err) => console.log("Ocurrio un error"));
    });

    return linea;
};

const prodLines = document.querySelector("[data-productsLines]");

productServices.listaProductos().then((data) => {
    data.forEach(({nombre, categoria, url, precio, descripcion, id}) => {
        const listarProductos = mostrarAllProductos(nombre, categoria, url, precio, descripcion, id);
        if(listarProductos){
            prodLines.appendChild(listarProductos); 
        }
    });
})