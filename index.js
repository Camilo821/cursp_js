// librerias para fechas: moment.js y date-fns
// Ver tipo de dato en js= typeof nombreVariable
//const ahora = new Date();
//
//let formatter = new Intl.DateTimeFormat('es-ES', {timeZone: 'America/Bogota'});
//let fecha = formatter.format(ahora);
//let CoDate = ahora.toLocaleString("es-ES", {timeZone: "America/Bogota"});
//console.log(ahora, CoDate, fecha);
//
//const dia = ahora.getDate();
//const mes = ahora.getMonth();
//const anio = ahora.getFullYear();
// La diferencia entre var y let es que let es una variable que solo existe en el bloque de codigo donde fue declarada
// var es una variable que existe en todo el codigo
// const es una variable que no puede cambiar su valor
let datos = {
    nombre: "Camilo",
    apellido: "Arboleda",
    edad: 14,
    altura: 1.60
}
let datos_lista = [
    { ...datos },
    {nombre: "Juan Diego", apellido: "Jimenez", edad: 14, altura: 1.85},
    {nombre: "Juan", apellido: "Perez", edad: 15, altura: 1.70},
]
let datos_ordenados = datos_lista.sort((a, b) => a.edad - b.edad);
console.log(datos_ordenados);
console.log(datos_lista);
console.log(datos)