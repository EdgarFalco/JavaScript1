function maysMinus(texto) {

  var resultado;
 //Compara mayusculas
  if(texto == texto.toUpperCase()) {
    resultado += " El texto esta formada por mayus";
  }
  //Compara minusculas
  else if(texto == texto.toLowerCase()) {
    resultado += " El texto esta formada por minus";
  }
  //Contiene mayus y minus
  else {
    resultado += " El texto esta formada por mays y minus";
  }

  return resultado;
}


