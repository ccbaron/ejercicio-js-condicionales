/*
1. Comprueba que no se muestra nada por el terminal cuando ejecutamos "node ex3.js"
2. Asigna un valor a la variable "numero" para que se muestren por el terminal TODOS los console.log del código. Actualmente, estamos asignando un 0.
3. BONUS: ¿Cual es el valón mínimo entero que resuelve este ejercicio?
*/

/* El valor mínimo entero para que todos los condicionales se cumplan es 501*/

let numero = 501;

if (numero > 0) {
  console.log("El número es mayor de 0.");
}

if (numero > 100) {
  console.log("El número es mayor de 100.");
}

if (numero > 500) {
  console.log("El número es mayor de 500.");
}
