let entrada = prompt("ingresa tu nombre");

while(entrada != "Hola"){
  switch (entrada){
    case "Ana":
      alert("Hola Ana");
      break;
    case "Orion":
      alert("Hola Orion");
      break;
    default:
      alert("¿Quien eres?")
      break;
  }
  entrada = prompt("Ingresar tu nombre")
}
//Si se pone Hola se detiene el ciclo.
//Si se ingresa cualquier case se ejecuta el alert con el mensaje
//Si la opcion ingresa no esta dentro de los case ni la entrada(Hola) de ejecutará default.