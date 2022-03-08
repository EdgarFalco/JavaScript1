function palindromo(texto) {

  var resultado;

  //Guardamos el texto en minusculas
  var textoMinus = texto.toLowerCase();

  // Separamos el texto en un array con split
  var letrasEspacios = textoMinus.split("");

  // Eliminamos los espacios en blanco
  var textoSinEspacios = "";

  for(i in letrasEspacios) {
    if(letrasEspacios[i] != " ") {
      textoSinEspacios += letrasEspacios[i];
    }
  }

  //Guardamos las letras en un array con split sin espacios
  var letras = textoSinEspacios.split("");
  //Guardamos la letras invertidas en un array con split sin espacios
  var letrasReves = textoSinEspacios.split("").reverse();

  var iguales = true;
  for(i in letras) {
    //Comprovamos que las letras y las letras al  reves sean iguales
    if(letras[i] == letrasReves[i]) {
      // Aun existe la posibilidad de que sea un palindromo
    }
    else {
      // Si encuentra alguna letra distinta, ya no sera palindromo
      iguales = false;
    }
  }
  
  //Añadiremos el resultado
  if(iguales) {
    resultado = "Es un palindromo";
  }
  else {
    resultado = "No es un palindromo";
  }

  return resultado;
}

alert(palindromo("sas"));
alert(palindromo("Esto no es un palindromo"));
alert(palindromo("La ruta nos aporto otro paso natural"));