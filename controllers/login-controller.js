//Abrir http (metodo, url)

//CRUD      -   Metodos HTTP
//Create    -   POST
//Read      -   GET
//Update    -   PUT/PATCH
//Delete    -   DELETE

//Fetch API

import { userServices } from "../service/user-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-user]").value;
    const contraseña = document.querySelector("[data-password]").value;

    userServices.obtenerUsuario()
    .then((users) => {
        const usuarioEncontrado = users.find(user => user.username === nombre && user.password === contraseña);
        if(usuarioEncontrado){
            location.href = "./screens/home.html";
        } else{
            alert("Usuario no encontrado. Por favor pruebe nuevamente");
        }
    })
    .catch(() => alert("Hubo un problema al obtener el usuario."));
});

/*
    const usuario = userServices.obtenerUsuario();
    usuario.then(() => {
        if(usuario.username == nombre && usuario.password == contraseña){
            location.href = "./screens/home.html";
        } else{
            //alert("AAAAAAAAAAAAA");
        }
    }).catch(alert("ENTRE POR EL CATCH"));
    //if(usuario.username == nombre && usuario.password == contraseña){
        //location.href = "./screens/home.html";
    //} else{
       //alert("Usuario no encontrado. Por favor pruebe nuevamente");
        //location.reload();
    //}
});
*/