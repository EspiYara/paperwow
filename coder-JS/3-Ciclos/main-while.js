let entrada = prompt("Ingresa una palabra");
//repetimos con while hasta que el usuario escriba "hola"

while(entrada !="hola"){
  alert("Ingresaste "+ entrada);
  //se solicitara nuevamente una palabra. en la proxima iteracion se evalua si no es hola.
  entreada = prompt("debes ingresar otra palabra")
}