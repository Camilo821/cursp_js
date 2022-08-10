/////// librerias para fechas: moment.js y date-fns
/////// Ver tipo de dato en js= typeof nombreVariable
///////const ahora = new Date();
///////
///////let formatter = new Intl.DateTimeFormat('es-ES', {timeZone: 'America/Bogota'});
///////let fecha = formatter.format(ahora);
///////let CoDate = ahora.toLocaleString("es-ES", {timeZone: "America/Bogota"});
///////console.log(ahora, CoDate, fecha);
///////
///////const dia = ahora.getDate();
///////const mes = ahora.getMonth();
///////const anio = ahora.getFullYear();
/////// La diferencia entre var y let es que let es una variable que solo existe en el bloque de codigo donde fue declarada
/////// var es una variable que existe en todo el codigo
/////// const es una variable que no puede cambiar su valor
///////const PROMESA = new Promise((resolve, reject) => {
///////    const i = Math.floor(Math.random() * 10);
///////    if (i !== 0){
///////        resolve()
///////    }else {
///////        reject()
///////    }
///////});
///////
///////
///////PROMESA
///////    .then(() => console.log("Se ha ejecutado de forma correcta"))
///////    .catch(() => console.log("Se ha ejecutado de forma incorrecta"))
///////    .finally(() => console.log("Se ha ejecutado"))
//////* eslint-disable */
//////* eslint-enable */
///////class Mina{
///////    id;
///////    explota;
///////    constructor(id, explota){
///////        this.explota = explota
///////        this.id = id
///////    }
///////    explotar(){
///////        alert("Perdiste");
///////    }
///////}
///////
///////let id = Math.ceil(Math.random()*8);
///////
///////for (i = 0; i<8; i++){
///////    document.getElementById("{i}");
///////    let mina = new Mina(id, )
///////}
///////
///////document.getElementById("parrafo").innerHTML = "Hola mundo";
///////boton = document.getElementById("boton")
///////f = document.getElementById("form");
///////preventDefault() evita que se ejecute el evento por defecto
///////f.addEventListener("submit", (e) => {
///////    e.preventDefault();
///////    console.log("Hola");
///////});
/////
/////texto = document.getElementById("h-texto");
/////texto.addEventListener("cambioTexto", (e) => {
/////    console.log(e.detail);
/////    texto.innerText = e.detail.texto;
/////    texto.style.color = e.detail.color;
/////})
/////
/////function cambioTexto(nuevoTexto, color){
/////    const Evento = new CustomEvent("cambioTexto", {
/////        detail: {
/////            texto: nuevoTexto,
/////            color
/////        }
/////    })
/////    texto.dispatchEvent(Evento);
/////}


//$('li').click(function(){
//    $(this).css('font-family', 'JetBrains Mono');
//    $('h1').hide();
//});

const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section")
console.log(parrafos);
parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", () => {
        // console.log("Inicio de arrastre")
        // console.log(parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })
    parrafo.addEventListener("dragend", () => {
        // console.log("He terminado de arrastrar")
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", () => {
        event.preventDefault()
        // console.log("Drag Over")
    })
    seccion.addEventListener("drop", () => {
        // console.log("drop")
        const parrafo_id = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(parrafo_id)
        seccion.appendChild(parrafo)
    })
})