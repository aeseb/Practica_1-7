/*Declaro nombres de variables y las inicializo.
Pido datos usando prompt.
Ejecuto el script en el index.html
*/

var anioActual = prompt("Año actual?");
var nombreDeMiMascota = prompt("Nombre de tu mascota:");
var estaSoleado = prompt("Esta soleado?");
var misBitcoins = prompt("Cuanto Bitcoin tenés?");

document.write(`
    <h3>Año actual? ${anioActual}</h3>  
    <h3>Nombre de tu mascota? ${nombreDeMiMascota}</h3>
    <h3>Esta soleado? ${estaSoleado}       //Si, es True; No, es False</h3>
    <h3>Cuanto BTC tenes? ${misBitcoins}</h3> 
`)
