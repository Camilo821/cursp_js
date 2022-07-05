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
var misDatos = {
    nombre: "Juan",
    edad: "14",
    desarrollador: true,
    fechaNacimiento: new Date(2007, 08, 21),
    libro: {
        titulo: "Ensayo sobre la ceguera",
        autor: "José Saramago",
        fecha: new Date(1995),
        url: "https://web.seducoahuila.gob.mx/biblioweb/upload/Saramago,%20Jose%20-%20Ensayo%20sobre%20la%20ceguera.pdf"
    }
}
console.log(misDatos);