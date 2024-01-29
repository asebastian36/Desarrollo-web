// This
const reservacion = {
    nombre: 'Angel Sebastian',
    apellido: 'Franco Lopez',
    total: 5000,
    pagado: false,
    informacion : () => {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion1 = {
    nombre: 'Diego Isaac',
    apellido: 'Franco Lopez',
    total: 5000,
    pagado: false,
    informacion : () => {
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion1.informacion();