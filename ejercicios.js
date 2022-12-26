//todo: Ejercicio del dia 10: 26/12/2022

//?1-Compara el alcance de las palabras clave "var" y "let"

/*
function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log(checkScope());
*/

//?2-Muta un arreglo declarado con const

/*
const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  
  return s;

  // Cambia solo el código encima de esta línea
}
editInPlace();

console.log(editInPlace());
*/

//?3-Prevenir la mutación del objeto

/*
function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
    Object.freeze(MATH_CONSTANTS);
  
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  console.log(freezeObj());
*/

//?4-Usa funciones flecha para escribir funciones anónimas de manera breve

/*
const magic = () => {
    return new Date();
  };

  console.log(magic());
  */

//?5-Escribe funciones flecha con parámetros

/*
const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  */

//?6-Establece parámetros por defecto para tus funciones

/*
// Cambia solo el código debajo de esta línea
const increment = (number, value = 1) => number + value;
// Cambia solo el código encima de esta línea

console.log(increment(2,5));
console.log(increment(5));
*/

//?7-Utiliza el parámetro rest con parámetros de función

/*
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  console.log(sum(1, 2, 3)); // 6
  console.log(sum(1, 2, 3, 8)); // 14
  console.log(sum(8)); // 8
*/

//?8-Utiliza el operador de propagación para evaluar los arreglos en el lugar

/*
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2 = Math.max(...arr1);

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);
*/

//?9-Usa sintaxis de desestructuración para extraer valores de objetos


