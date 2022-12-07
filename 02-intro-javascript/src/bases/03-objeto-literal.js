const persona = {
    nombre: 'Tony',
    apellido: 'Start',
    edad: 45,
    direccion : {
        ciudad: 'New York',
        telefono: '552345678',
        lat: 12.456,
        lng: 84.566
    }
};

console.log({
    persona
});

// console.table(persona);
const persona2 = {...persona};
persona2.nombre = "Rob";
console.log(persona.nombre);
console.log(persona2.nombre);

