// Solicitamos un valor al usuario
let ingresarNumero = parseInt(prompt("Ingresar Numero")); 
 //En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 3; i++) {
    let resultado = ingresarNumero + i ; 
    alert(ingresarNumero +" + "+ i +" = "+ resultado);
}


//se pide un nombre al usuario
let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while(entrada != "ESC" ){
   switch (entrada) {
       case "Romi":
           alert("HOLA Romi");
           break;
       case "Ramon":
           alert("HOLA Ramon");
           break;
      default:
          alert("Favor ingresar un nombre")
           break;
   entrada = prompt("Ingresar un nombre");
}


let numero = parseFloat(prompt("ingresa un numero"));

for (let i = 1; i <= 2; i++) {
  alert("hola");  
}

