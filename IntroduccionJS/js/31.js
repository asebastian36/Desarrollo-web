//  notificacion con api

//  seleccionar el elemento del html
const boton = document.querySelector('#boton');

//  le asignamos el comportamiento
boton.addEventListener('click', () => {
    //  preguntamos si podemos enviar una notificacion
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es ${resultado}`) )
})

//  mandamos la notificacion si se nos da el permiso
if(Notification.permission === 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Juan, los mejores tutoriales'
    })
}