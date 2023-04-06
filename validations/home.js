import { userServices } from "../service/user-service.js";

const bienvenida = document.querySelector(".bienvenido");

if(localStorage.getItem("user")){
    let usuario = JSON.parse(sessionStorage.getItem("user"));
    bienvenida.innerHTML = `¡Bienvenid@ ${usuario.username}!`;
} else{
    console.log("no entre al if");
}

