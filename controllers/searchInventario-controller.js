import { productServices } from "../service/product-service.js";

const btnSearch = document.querySelector("[data-btnSearch]");
const input = document.querySelector("[data-input]");

const resultadoBusqueda = (id, nombre, categoria, url, precio, descripcion) => {
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

const productsContainer = document.querySelector("[data-productsContainer]");

btnSearch.addEventListener("click", (event) => {
    event.preventDefault();
    productsContainer.innerHTML = "";
    productServices.buscarProducto(input.value).then((data) => {
        data.forEach(({id, nombre, categoria, url, precio, descripcion}) => {
            const busqueda = resultadoBusqueda(id, nombre, categoria, url, precio, descripcion);
            if(busqueda && input.value!=""){
                productsContainer.classList.add("products__container-busqueda")
                productsContainer.appendChild(busqueda);
            }
        });
    });
});