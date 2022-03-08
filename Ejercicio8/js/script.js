var num = prompt("Introduce un número entero");

var resultado = parImpar(num);
alert("El número " + num + " es " + resultado);

function parImpar(num) {
  //Si el residuo es 0 es par, si no es impar
  if(num % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
