import { productServices } from "../service/product-service.js";      

const mostrarAllProductos = (nombre, categoria, url, precio, descripcion) => {
    const linea = document.createElement("div");
    linea.classList.add("line__item");
    const contenido = `
        <div id="icons__container">
            <i class="fa-solid fa-trash"></i>
            <i class="fa-solid fa-pencil"></i>
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
        <a href="">
            <div class="item__description">Ver producto</div>
        </a>
    `;
    linea.innerHTML = contenido;
    return linea;
}

const prodLines = document.querySelector("[data-productsLines]");

productServices.listaProductos().then((data) => {
    data.forEach(({nombre, categoria, url, precio, descripcion}) => {
        const listarProductos = mostrarAllProductos(nombre, categoria, url, precio, descripcion);
        if(listarProductos){
            prodLines.appendChild(listarProductos); 
        }
    });
})