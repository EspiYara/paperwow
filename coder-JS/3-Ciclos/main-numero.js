//Se solicita un valor 
let ingresaNumero= parseInt(prompt("Ingresar numero"));

//En cada repetición, calculamos el número ingresado x el número de repeticion (i)

for (let i = 1; i <= 3; i++) {
  let resultado = ingresaNumero * i;
  alert(ingresaNumero +" x "+ i +" = "+ resultado);
}