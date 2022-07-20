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
lista =  ["Sal", "Azúcar", "Café", "Atún", "Cerveza"];
lista.push("Aceite de Girasol");
lista.pop();
peliculas = [{
    titulo: "Avengers: Endgame",
    director: "Anthony Russo",
    anio: new Date(2019, 04, 05)
},
{
    titulo: "Avengers: Infinity War",
    director: "Anthony Russo",
    anio: new Date(2018, 05, 25)
},
{
    titulo: "Piratas del Caribe: La maldición del Perla Negra",
    director: "Gore Verbinski",
    anio: new Date(2003, 08, 01)
}]
peliculasp2010 = peliculas.filter(valor => valor.anio.getFullYear() > 2010);
directores = peliculas.map(valor => valor.director);
titulos = peliculas.map(valor => valor.titulo);
titulos_directores = titulos.concat(directores);
titulos_directores_map = peliculas.map(valor => valor.titulo + " - " + valor.director);
