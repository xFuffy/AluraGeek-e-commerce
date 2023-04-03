import { userServices } from "../service/user-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const usuario = document.querySelector("[data-user]").value;
    const email = document.querySelector("[data-email]").value;
    const re_email = document.querySelector("[data-re_email]").value;
    const password = document.querySelector("[data-password]").value;
    const re_password = document.querySelector("[data-re_password]").value;

    if(email == re_email && password == re_password){
        userServices.crearUsuario(usuario, email, password).then( () => {
            location.href = "home.html";
        });
    } else {
        alert("Error. Vuelta a intentarlo");
        location.reload();
    }
});
/*
const formulario = document.querySelector("[data-form]");               //Creo una variable para tener el formulario

formulario.addEventListener("submit", (evento) => {                     //Se agrega evento para saber cuando se hace click en submit
    evento.preventDefault();                                            //Se hace que no tenga acciones por default el evento
    const usuario = document.querySelector("[user]").value;       //Se guarda en la constante nombre el valor ingresado en el campo nombre
    const email = document.querySelector("[email]").value;         //Se guarda en la constante email el valor ingresado en el campo email
    clientServices.crearCliente(nombre,email).then( () => {             //Se llama al metodo de clientServices crearCliente pasandole por parametros las variables de nombre y email, y como es una promesa agregamos un .then y un .catch para que sepa que hacer si es correcto todo o no
        window.location.href = "../screens/registro_completado.html";   //Si esta todo bien nos redirecciona a otra screen que es la de registro completado
    }).catch( (err) => console.log(err));                               //Si esta todo mal tira un error en la consola
});

*/