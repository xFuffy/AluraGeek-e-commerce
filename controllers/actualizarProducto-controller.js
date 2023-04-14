import { productServices } from "../service/product-service.js";

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null){
        window.location.href = "./productos.html";
    }

    const url_img = document.querySelector("[data-url]");
    const cat = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombreProd]");
    const precio = document.querySelector("[data-precio]");
    const desc = document.querySelector("[data-descripcion]");

    try{
        const producto = await productServices.detalleProducto(id);
        if(producto.nombre && producto.categoria && producto.url && producto.precio && producto.descripcion){
            url_img.value = producto.url;
            cat.value = producto.categoria;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            desc.value = producto.descripcion;
        } else{
            throw new Error();
        }
    } catch(error){
        window.location.href = "./productos.html"
    }
};

obtenerInformacion();

const formulario = document.querySelector("[data-editForm]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const url_img = document.querySelector("[data-url]").value;
    const cat = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombreProd]").value;
    const precio = document.querySelector("[data-precio]").value;
    const desc = document.querySelector("[data-descripcion]").value;
    productServices.actualizarProducto(nombre, cat, url_img, precio, desc, id).then(() => {
        window.location.href = "./productos.html";
    });
});

