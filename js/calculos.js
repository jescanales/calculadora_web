var valor01 = parseInt(window.prompt("Ingrese el primer número: "));
var valor02 = parseInt(window.prompt("Ingrese el segundo número: "));
var suma = valor01 + valor02;


document.getElementById("numUno").innerHTML = "El primer número es: " + valor01 ;
document.getElementById("numDos").innerHTML ="El segundo número es: " + valor02 ;
document.getElementById("suma").innerHTML = "El resultado de la suma es: " + suma;