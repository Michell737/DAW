//Uso de js

//Uso de la consola
console.log("hola");
console.info("Estamos en el bloque de DAW-BD");
console.warn("Advertencia");
console.error("Error!!!!");

//Variables, constantes y alcance
const precio = 9.99;
let tacos = 8; //Declaramos variables que viven dentro del ámbito en el que se declara, es decir entre las llaves {}
var pizzas = 0; //Tiene alcance en toda la función donde fue declarada.

//Estructuras de control
if(1===1){  //El triple igual compara entre dos valores
    let gorditas = 3;
    console.log("verdadero");
}else{
    console.log("falso")
}

//console.log(gorditas);    //Esta linea truena el script porque let murió en el if

for(var i = 0; i < 10; i++){
    console.log(i);
}

//console.log(i);    //Esta linea truena el script porque let murió en el if


//alerts, prompts y confirms, escribir en el html
window.alert("Esto es una alerta de hambre");

const comida = window.prompt("¿Cuál es tu comida favorita?");
console.info("La comida favorita del usuario es: " + comida);

const respuesta = window.confirm("¿Tienes mucha hambre?");

if(respuesta){
    console.warn("Vamos a comer "+ comida + " ahora!!!");
}else{
    console.log("Podemos pensar cuál es el mejor lugar para comer " + comida);
}

//Funciones
function calcular_precio(numero_tacos){
    return numero_tacos * precio;
}

console.log("Tu total es de $" + calcular_precio(7));

//Funciones flecha
const calcular_precio_flecha = (numero_tacos) => numero_tacos * precio;

console.log("Tu total es de $" + calcular_precio_flecha(7));

//Arreglos

//Recorrido de arreglos

//Objetos