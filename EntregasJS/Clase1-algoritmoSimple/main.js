// se solicita un color y se muestra por consola
let color = prompt("Ingresa tu color favorito: ");
console.log("Tu color favorito es: " + color)

// Se solicita un numero y se le suma 5 el resultado se muestra por consola
let numeroIngresado = parseFloat(prompt("Ingresa un numero del 1 al 10: "));
let numeroSumado = numeroIngresado + 5;
console.log("El resultado del numero ingresado por el usuario mas el numero almacenado es: " + numeroSumado)

// Se pide nombre y apellido al usuario y se muestra en un alert
let nombreUsuario = prompt("Ingresa tu nombre:");
let apellidoUsuario = prompt("Ingresa tu apellido:");

alert("El nombre ingresado es " + nombreUsuario + " " + apellidoUsuario) 