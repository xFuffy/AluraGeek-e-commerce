import { productServices } from "../service/product-service.js";      

const mostrarAllProductos = (id, nombre, categoria, url, precio, descripcion) => {
    const linea = document.createElement("div");
    linea.classList.add("line__item");
    const contenido = `
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
    return linea;
}

const prodStarWars = document.querySelector("[data-starwars]");
const prodConsolas = document.querySelector("[data-consolas]");
const prodDiversos = document.querySelector("[data-diversos]");

productServices.listaProductos().then((data) => {
    data.forEach(({id, nombre, categoria, url, precio, descripcion}) => {
        if(categoria=="star wars") {
            const listarStarWars = mostrarAllProductos(id, nombre, categoria, url, precio, descripcion);
            if(listarStarWars){
                prodStarWars.appendChild(listarStarWars);
            }
        }
        else if(categoria=="consolas") {
            const listarConsolas = mostrarAllProductos(id, nombre, categoria, url, precio, descripcion);
            if(listarConsolas){
                prodConsolas.appendChild(listarConsolas);
            }
        }
        else if(categoria=="diversos") {
            const listarDiversos = mostrarAllProductos(id, nombre, categoria, url, precio, descripcion);
            if(listarDiversos){
                prodDiversos.appendChild(listarDiversos);
            }
        }
    })
});