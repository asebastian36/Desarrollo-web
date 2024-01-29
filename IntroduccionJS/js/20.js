
// Métodos de propiedad o crear nuestros propios metodos
const reproductor = {
    reproducir : function(id) {
        console.log(`Reproduciendo Canción con el ID: ${id}`)
    },
    pausar : function() {
        console.log('Pausando...')
    },
    crearPlaylist : function(nombre) {
        console.log(`Creando la playlist: ${nombre}`)
    },
    reproducirPlaylist : function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },
}

//  agregando otro metodo
reproductor.borrarCancion = function(id) {
    console.log(`Eliminando la canción: ${id}`)
}

//  llamada a las funciones
reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');