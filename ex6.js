/*

Mira este vídeo antes de hacer el los siguientes ejercicios: https://www.youtube.com/watch?v=ovWYhDVQiR8

1. Antes de ejecutar "node ex6.js"; razona: qué vamos a ver por el terminal? ¿Por qué ?

*/

/* Se ejecutará solo la primera condición "Esta condición se cumple" ya que en el primer condicional se cumplen las dos condiciones requeridas para ejecutarse,
por otro lado, en el segundo condicional solo se cumple una de las condiciones que se necesitan para ejecutarse.*/

if (4 > 3 && 6 > 5) {
  console.log("Esta condición se cumple");
}

if (4 > 3 && -1 > 0) {
  console.log("Esta condición también se cumple?");
}

/**
 * Lecturas adicionales: 
https://www.w3schools.com/js/tryit.asp?filename=tryjs_comparison_and
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#operadores_l%C3%B3gicos

 */
