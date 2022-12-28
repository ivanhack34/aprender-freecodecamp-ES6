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

//TODO: Ejercicio del dia 11: 27/12/2022

//?9-Usa sintaxis de desestructuración para extraer valores de objetos

/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const {today, tomorrow} = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea

console.log(HIGH_TEMPERATURES)
*/

//?10-Usa sintaxis de desestructuración para asignar variables desde objetos

/*
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Cambia solo el código debajo de esta línea

const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Cambia solo el código encima de esta línea

console.log(HIGH_TEMPERATURES);
*/

//?11-Usa sintaxis de desestructuración para asignar variables desde objetos anidados

/*
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Cambia solo el código debajo de esta línea

const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Cambia solo el código encima de esta línea

console.log(LOCAL_FORECAST);
*/

//?12-Usa sintaxis de desestructuración para asignar variables desde arreglos

/*
let a = 8, b = 6;
// Cambia solo el código debajo de esta línea
[a,b] = [b,a]

console.log([a,b]);
console.log([b,a]);
*/

//?13-Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo

/*
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea
  const [a,b,...shorterList] = list; // Cambia esta línea
  // Cambia solo el código encima de esta línea
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(removeFirstTwo(source));
*/

//?14-Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función

/*
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Cambia solo el código debajo de esta línea
const half = ({ max, min }) => (max + min) / 2.0;
// Cambia solo el código encima de esta línea
*/

//?15-Crea cadenas usando plantillas literales

/*
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Cambia solo el código debajo de esta línea
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Cambia solo el código encima de esta línea

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList)
*/

//?16-Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto

/*
const createPerson = (name, age, gender) => {
  // Cambia solo el código debajo de esta línea
   return {
    name,
    age,
    gender
  };
  // Cambia solo el código encima de esta línea
};

console.log(createPerson());
*/

//Todo: Ejercicio del dia 12: 28/12/2022

//?17-Escribe funciones breves y declarativas con ES6

/*
// Cambia solo el código debajo de esta línea
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
// Cambia solo el código encima de esta línea
bicycle.setGear(3);
console.log(bicycle.gear);
*/

//?18-Usa sintaxis de clases para definir una función constructora

/*
// Cambia solo el código debajo de esta línea
class Vegetable{
  constructor(name){
    this.name = name;
  }} 
// Cambia solo el código encima de esta línea

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Debería mostrar 'carrot'
*/

//?19-Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto

/*
// Cambia solo el código debajo de esta línea
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}
// Cambia solo el código encima de esta línea

const thermos = new Thermostat(76); // Ajuste en escala Farenheit
let temp = thermos.temperature; // 24.44 en Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 en Celsius

console.log(temp);
*/

//?20-Crea un módulo para scripts

/*
<html>
  <body>
    <!-- Cambia solo el código debajo de esta línea -->
      <script type="module" src="index.js"></script>
    <!-- Cambia solo el código encima de esta línea -->
  </body>
</html>
*/

//?21-Utiliza la exportación para compartir un bloque de código

/*
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString}; //Respuesta
*/

//?22-Reutiliza código de JavaScript utilizando import

/*
import {uppercaseString, lowercaseString} from './string_functions.js'; //Respuesta
// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");
*/

//?23-Use * para importar todo de un archivo

/*
import * as stringFunctions  from './string_functions.js' //Respuesta
// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

//?24-Crear un fallback de exportación con export default

/*
export default function subtract(x, y) { //Respuesta
  return x - y;
}
*/

//?25-Importa una exportación por defecto

/*
import subtract from "./math_functions.js"; //Respuesta
// Cambia solo el código encima de esta línea

subtract(7,4);
*/

//?26-Crea una promesa de JavaScript

/*
const makeServerRequest = new Promise((resolve, reject)=> {

});
*/

//?27-Cumpleta una promesa con "resolve" y "reject"

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer representa una respuesta de un servidor
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data"); //Respuestas
  } else {  
    reject("Data not received"); //Respuestas
  }
});
*/

//?28-Maneja una promesa cumplida usando then

/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
  let responseFromServer = true;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
*/

//?29-Maneja una promesa rechazada usando catch
/*
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
  let responseFromServer = false;

  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});


makeServerRequest.catch(error => { //Respuesta
  console.log(error); 
}); 
*/


