//Se solicita un valor 
let ingresaNumero= parseInt(prompt("Ingresar numero cualquiera"));

//En cada repetición, calculamos el número ingresado x el número de repeticion (i)

for (let i = 2; i <= 3; i++) {
  let resultado = ingresaNumero * i;
  alert(ingresaNumero +" x "+ i +" = "+ resultado);
}

//el numero ingresado por el usuario se multiplicara x2 y se repetira 3 veces.