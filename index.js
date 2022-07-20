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
let date = date.now();
let fecha_nacimiento = new Date(2007, 07, 21);
let bool = fecha_nacimiento.getTime() < date.getTime();
let bool2 = fecha_nacimiento.getDay()
let bool3 = fecha_nacimiento.getMonth() + 1
let bool4 = fecha_nacimiento.getFullYear()
