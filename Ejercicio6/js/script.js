var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

//Pedimos por pantalla el dni
var numero = prompt("Introduce tu número de DNI (sin la letra)");
//Pedimos por pantalla la letra
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
//Convertimos la letra introducida por el usuario en minuscula
letra = letra.toUpperCase();

//Miramos si el numero proporcionado es válido entre un rango 
if(numero < 0 || numero > 99999999) {
    alert("El número proporcionado no es válido");
} else { //Si el numero es valido miramos la letra
    var letraCalc = letras[numero % 23];
    //Si no coincide mensaje de error sino mensaje correcto
    if(letraCalc != letra) {
      alert("La letra o el número proporcionados no son correctos");
    }
    else {
      alert("El número de DNI y su letra son correctos");
    }
  }
