//condicionales numericos mayor que
let edad = parseInt(prompt("Ingrese un número"));
if (edad >= 1000){
  alert("el número es mayor a 1000");
}else{
  alert("el número es menor a 1000")
}

//condicionales pedir un texto
let texto = prompt("Ingrese un texto");
if (texto == "Hola"){
  console.log("muy bien, ingresaste hola");
}else{
  console.log("debes saludarme")
}

//condicionales, pedir un numero que entre dentro de un rango
let numero = prompt("Elige un numero del 1 al 60");

if((numero >= "1" ) && (numero <= "60")) {
  alert("muy bien, en numero esta entre 1 y 60!");
}else{
  alert("vuelve a intentarlo!");
}