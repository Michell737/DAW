function Cuadrados_Cubos() {

    let num1 = prompt("Ingresa un número: ");
    let numbase = num1;
    console.info("Elegiste el número " + num1);
    document.write("<table> <tr><th>Número </th> <th>Cuadrado </th> <th>Cubo </th></tr>");
    for (let i = 1; i <= num1; i++) {
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Math.pow(i, 2) + "</td>");
        document.write("<td>" + Math.pow(i, 3) + "</td> </tr>");



    }

}

function Suma_Aleatoria() {
    let start = new Date().getTime();

    let num1 = parseInt(Math.random() * 10);
    let num2 = parseInt(Math.random() * 10);
    let res = num1 + num2;


    let resUsuario = prompt("Da el resultado de la suma de " + num1 + " y " + num2);

    let end = new Date().getTime();
    let final = (end - start) * 0.001;


    if (res == resUsuario) {
        window.alert("Resultado Correcto\nTiempo de ejecución: " + final + " segundos");

    } else {
        window.alert("Resultado Incorrecto\nLa suma de " + num1 + "+" + num2 + "=" + res + "\nTu resultado fue:  " + resUsuario + "\nTiempo de ejecución: " + final + " segundos");

    }

}


function Contador() {
    const arrayConteo = [];
    let numNegativos = 0;
    let ceros = 0;
    let numPositivos = 0;
    for (let i = 1; i <= 6; i++) {
        const numArreglo = window.prompt("Escribe un número en decimal ya sea positivo, negativo o cero:");
        arrayConteo.push(numArreglo);

    }

    for (let i = 0; i < arrayConteo.length; i++) {
        if (arrayConteo[i] == 0) {
            ceros++;
        } else if (arrayConteo[i] < 0) {
            numNegativos++;
        } else {
            numPositivos++;
        }
    }

    alert("El arreglo que escribiste fue: "+ arrayConteo);
    alert("Ceros: " + ceros + "\nNegativos: " + numNegativos + "\nPositivos: " + numPositivos);

}

function Promedios() {
    const filas = prompt("Número de filas de la matriz (cantidad de arreglos): ");
    const columnas = prompt("Número de columnas de la matriz: ");
    
    if(filas){
        if(columnas){
            let matriz = new Array();
            let suma = 0;
            let arreglo = new Array;

            for(let i=0; i<filas; i++){
                matriz [i] = new Array();
                for(var j=0; j<columnas; j++){
                    matriz [i][j] = prompt("Ingresa el número de la coordenada " + i + "," + j);
                }
            }
            console.log(matriz);
        
            for(let i=0; i<filas; i++){
                for(var j=0; j<columnas; j++){
                    num = parseInt(matriz [i][j]);
                    suma = suma + num;
                }
                arreglo[i] = suma/columnas;
                suma = 0;
            }
            
            console.log("Arreglo con promedio de cada arreglo de la matriz: "  + "[" + arreglo + "]");
        }
    }
}

function Inverso() {
    var inv = 0;
    var numInv = prompt("Escribe un número de más de un dígito: ");
    var rest = numInv;
    do {
        inv = inv * 10 + (rest % 10);
        rest = Math.floor(rest / 10);
    } while (rest > 0)
    alert("El número es:     " + numInv + "\nNúmero invertido: " + inv);

}

function Interes_compuesto() {

    var precioFinal;
    let credito = prompt("Ingresa la cantidad de crédito solicitado: ");
    let años = prompt("Cantidad de años a los que se solicitó el crédito: ");
    let interes_porc = prompt("Ingrese el porcentaje de interés compuesto anual: ");
    //Obtener interes compuesto anual

    interes = (interes_porc/100);
    
    Deuda_final = credito*Math.pow((1+interes),años);

    document.getElementById("interes_compuesto").innerHTML = "Si se solicita un crédito de " + credito + " pesos durante " + años + " años a un interés compuesto del " + interes_porc + " % anual . . . "+ "<br>El dinero que se pagará al final de los "+ años + " años, será de: <br> $" + Deuda_final;
    console.log("La deuda será de $"+ Deuda_final);

}