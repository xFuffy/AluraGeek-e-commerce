import { productServices } from "../service/product-service.js";      

const mostrarAllProductos = (nombre, categoria, url, precio) => {
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
            <a href="">
                <div class="item__description">Ver producto</div>
            </a>
    `;
    linea.innerHTML = contenido;
    return linea;
}

const prodContainer = document.querySelector("[data-productsContainer]");

productServices.listaProductos().then((data) => {
    data.forEach(({nombre, categoria, url, precio}) => {
        const listarProductos = mostrarAllProductos(nombre, categoria, url, precio);
        prodContainer.appendChild(listarProductos);
    });
})

/*
const crearNuevaLinea = (nombre,email,id) => {                      //Se crea una variable para poder cargar la tabla
    const linea = document.createElement("tr")                      //Se crea una variable para que cree un elemento dentro de tipo tr
    const contenido = `                                 
    <td class="td" data-td>
        ${nombre}
    </td>
    <td>
        ${email}
    </td>
    <td>
        <ul class="table__button-control">
            <li>
                <a href="../screens/editar_cliente.html?id=${id}" class="simple-button simple-button--edit">Editar</a>
            </li>
            <li>
                <button class="simple-button simple-button--delete" type="button" id="${id}">Eliminar</button>
            </li>
        </ul>
    </td>
    `;                                                              //Se coloca el contenido de HTML que queremos que se cree cuando se llame a la funcion
    linea.innerHTML = contenido;                                    //Se coloca el contenido anterior dentro del contenido vacio que contiene la variable que creo el elemento tipo tr
    const btn = linea.querySelector("button");                      //Se crea una constante donde se guarda el boton de la linea
    btn.addEventListener("click", () => {                           //Se crea un event listener para ver cuando se hace click en el btn
        const id = btn.id;                                          //Se le dio al btn el id anteriormente y aca creamos una variable donde guardamos el id del btn
        clientServices.eliminarCliente(id).then((respuesta) => {    //Se llama a la funcion eliminarCliente de clientServices y se le manda por parametro el id del boton. Como es una promesa se agregan los metodos .then y .catch
            console.log(respuesta); 
        }).catch((err) => alert("Ocurrio un error"));
    });
    
    return linea;                                                   //Se devuelve la linea con todo el contenido
};

const table = document.querySelector("[data-table]");               //Se guarda en la constante tabla la tabla del html


clientServices.listaClientes().then((data) => {                     //Se llama a la funcion listaClientes y se le dice que si esta todo bien le mande por parametros la data
data.forEach( ({nombre, email, id}) => {                            //Se hace que por cada data se cree una nueva linea con los datos del cliente
        const nuevaLinea = crearNuevaLinea(nombre, email, id);
        table.appendChild(nuevaLinea);                              //Se le asigna a la tabla como hijo una nueva linea
    });
}).catch((error) => alert("Ocurrio un error"));                     //Si esta todo mal tira una alerta
*/