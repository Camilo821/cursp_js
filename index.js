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
let nombre = "Camilo";
let apellido = "Arboleda";
let estudiante = nombre + " " + apellido;
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLength = estudiante.length;
let first_letter = estudiante[0];
let last_letter = estudiante[estudiante.length - 1];
let estudiante_sin_espacios = estudiante.replace(" ", "");
let nombre_in_estudiante = estudiante.includes(nombre)
console.log(nombre_in_estudiante)