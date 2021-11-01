//Variables declaracion e inicializacion
var nombre ="Pepe";
var apellido ="Gomez";
const espacio =" ";

let edad; //declaracion
edad=32; //inicializacion

let edad2=31; //todo junto

//operaciones matematicas con numeros
let suma = edad + edad2; //resultado 63
let resta = edad - edad2; //resultado 1
let multiplicacion = edad * edad2; // 
let division = edad / 5; // 6.4

//concatenacion
let nombreCompleto = nombre + apellido; // PepeGomez
let nombreCompleto2 = nombre + espacio + apellido; //Pepe Gomez

//Salida de datos
console.log(nombreCompleto2)
console.log(suma)
console.log("el resultado de la suma es " + suma)
console.log("Nombre: " + nombre + espacio + apellido)

/*alert("Hola Chicos");
alert("Hola " + nombre);
alert("La edad de " + nombre + " es: " + edad)*/

//entrada de datos atraves de prompt
let equipoFutbol = prompt("Ingrese su equipo de futbol favorito");
console.log("El equipo favorito del usuario es: " + equipoFutbol);

let anioNacimiento = parseInt(prompt("Ingresae su año de nacimiento"));
//recibe el año y lo convierte a numero entero para poder operar matematicamente
console.log("El usuario nacio en: " + anioNacimiento);

let edadUsuario = 2021 - anioNacimiento;
console.log("la edad del usuario es: " + edadUsuario);

let suma2= anioNacimiento + 1;
console.log("La suma da; " + suma2);

let precio=parseFloat(prompt("Ingrese el precio del pruducto;"));
let precioConAumento = precio + 20;
console.log("El precio con inflasion es: $"  + precioConAumento);