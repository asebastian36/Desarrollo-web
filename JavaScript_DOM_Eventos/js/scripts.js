//  seleccionar elementos html:
//  query selector

//  retorna 0 o 1 elemento
const heading = document.querySelector(".header__texto h2"); //  selectores similares a css

heading.textContent = "Cambio desde js";
console.log(heading);

//  query selector all

//  retorna de 0 a n elementos
const enlaces = document.querySelectorAll(".navegacion a"); // tambien usa selectores de css

enlaces[0].textContent = "holi";
enlaces[0].href = "www.google.com";
enlaces[0].classList.add("nueva-clase");
//  enlaces[0].classList.remove("navegacion__enlace");

console.log(enlaces);

//  get element by id
const head = document.getElementById("head");

//  create element

//  generar nuevo enlace:
const nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "nuevo-enlace.html";
nuevoEnlace.textContent = "nuevo enlace";
nuevoEnlace.classList.add("navegacion__enlace");

//  incluirlo en el html
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//  eventos

console.log(1);

//  load espera a que el js y los archivos que dependen del html esten listos
window.addEventListener("load",  () => {
    console.log(2);
});

//  onload = load solo tienen diferente sintaxis
window.onload = () => {
    console.log(3);
}

//  solo espera que cargue el html
document.addEventListener("DOMContentLoaded", () => {
   console.log(4);
});

console.log(5);

window.onscroll = () => {
    console.log("estas haciendo scroll");
}

//  seleccionar elementos y asociarles un evento

//  const botonEnviar = document.querySelector(".boton--primario");
//  botonEnviar.addEventListener("click", (evento) => { // evento se carga al llamar
    //  console.log(evento.target);
    //  puede ser util para validar formulario
    //  evento.preventDefault();
    //  console.log("enviando formulario...")
//  });

//  eventos con el teclado

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const mensaje = document.querySelector("#mensaje");
const email = document.querySelector("#email");
const nombre = document.querySelector("#nombre");

nombre.addEventListener("input", leerInput);
mensaje.addEventListener("input", leerInput);
email.addEventListener("input", leerInput);

function leerInput(evento) {
    datos[evento.target.id] = evento.target.value;
    console.log(datos);
}

//  evento submit

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const {nombre, email, mensaje } = datos;

    if( (nombre === "") && (email === "") ) {
        mostrarAlerta("los campos estan vacios", "error");
        return;
    }
    if(nombre === "") {
        mostrarAlerta("El nombre esta vacio", "error");
        return;
    }
    if(email === "") {
        mostrarAlerta("El email esta vacio", "error");
        return;
    }
    
    mostrarAlerta("los campos estan validados");
    console.log("enviando formulario con submit");
});

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(error) alerta.classList.add("error");
    else alerta.classList.add("correcto");

    formulario.appendChild(alerta);

    //  desaparecer advertencia
    setTimeout( () => {
        alerta.remove();
    }, 3000);
}