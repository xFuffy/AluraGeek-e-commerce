import { userServices } from "../service/user-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const username = document.querySelector("[data-user]").value;
    const email = document.querySelector("[data-email]").value;
    const re_email = document.querySelector("[data-re_email]").value;
    const password = document.querySelector("[data-password]").value;
    const re_password = document.querySelector("[data-re_password]").value;

    if(email == re_email && password == re_password){
        userServices.crearUsuario(username, email, password).then( () => {
            const usuarioCreado = {username, email};
            console.log(usuarioCreado);
            localStorage.setItem("user", JSON.stringify(usuarioCreado));
            location.href = "home.html";
        });
    } else {
        alert("Error. Vuelta a intentarlo");
        location.reload();
    }
});
