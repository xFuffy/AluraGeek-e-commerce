import { userServices } from "../service/user-service.js";

/*
await userServices.detalleUsuario()
.then((user) => {
    const id = user.id;
    const username = user.username;

    console.log(id);
    console.log(username);

    bienvenida.innerHTML = `¡Bienvenid@ ${username}!`;

});
*/

const bienvenida = document.querySelector(".bienvenido");

const obtenerInformacion = async () => {
    const url =  new URL(window.location);
    const id = url.searchParams.get("id");

try{
    const user = await userServices.detalleUsuario(id);
    console.log(user);
    if(user.username){
        bienvenida.innerHTML = `¡Bienvenid@ ${user.username}!`;
    } else{
        console.log("ENTRE POR EL IF");
    }
} catch{
    console.log("ENTRE POR EL CATCH");
    }
};

obtenerInformacion();