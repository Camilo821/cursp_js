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
//const PROMESA = new Promise((resolve, reject) => {
//    const i = Math.floor(Math.random() * 10);
//    if (i !== 0){
//        resolve()
//    }else {
//        reject()
//    }
//});
//
//
//PROMESA
//    .then(() => console.log("Se ha ejecutado de forma correcta"))
//    .catch(() => console.log("Se ha ejecutado de forma incorrecta"))
//    .finally(() => console.log("Se ha ejecutado"))
function fun (value){
    if (typeof value === "number"){
        return value * value;
    }

    throw new Error("El valor debe ser un número")
}

try {
    console.log(fun(5));
} catch(e){
    console.log(e);
}