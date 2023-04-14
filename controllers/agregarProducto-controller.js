import { productServices } from "../service/product-service.js";          

const formulario = document.querySelector("[data-addForm]");               

formulario.addEventListener("submit", (evento) => {                     
    evento.preventDefault();                                            
    const url_img = document.querySelector("[data-url]").value;       
    const categoria = document.querySelector("[data-categoria]").value;  
    const nombre = document.querySelector("[data-nombreProd]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    productServices.crearProducto(nombre, categoria, url_img, precio, descripcion).then( () => {             
        window.location.href = "productos.html";   
    }).catch( (err) => console.log(err));
});                             