function mostrarImagen(img) {
    //  crear el elemento al hacer click
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${img}.avif" type="image/avif">
        <source srcset="build/img/grande/${img}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${img}.jpg" alt="Imagen galeria">
    `;

    //  donde se guardara el elemento
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //  para cerrar la imagen dando click en el fondo
    overlay.onclick = function () {
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //  para cerrar el elemento
    const cerrar = document.createElement('P');
    cerrar.textContent = 'X';
    cerrar.classList.add('btn-cerrar');
    cerrar.onclick = function () {
        //  lo agregamos a la pagina
        const body = document.querySelector('body');

        //  quitamos la clase que impide hacer scroll al cerrar la imagen
        body.classList.remove('fijar-body');
        overlay.remove();
    }

    //  agregar el boton a la ventana de la imagen
    overlay.appendChild(cerrar);

    //  lo agregamos a la pagina
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
}

function crearGaleria() {
    //  para elegir donde colocar los elementos
    const galeria = document.querySelector('.galeria-imagenes');

    //  crear los elementos en el html
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galeria">
        `;

        //  para llamar a la imagen grande con el click
        imagen.onclick = function () {
            mostrarImagen(i);
        };

        //  agregar la imagen a la pagina
        galeria.appendChild(imagen);
    }
}

function iniciarApp() {
    crearGaleria();
}

document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
});
