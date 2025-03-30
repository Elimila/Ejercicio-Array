
const arrayVacio =[]

const arrayNumeros= [0,1,2,3,4,5,6,7,8,9];
const arrayNumerosPares =[0,2,4,6,8];
const arrayBidimensional=[[0,1,2],["a","b","c"]];

// funciones

//5.-Crea la función **suma** que acepte como argumento **dos números** y devuelva **el resultado de su suma**

function suma(a,b){
    return a + b;
}
//6.-Crea la función **potenciacion** que acepte como argumento **dos números** y devuelva **el resultado de elevar el primero(a) al segundo(b) (a^b)**

function potenciacion(a,b){
    return a ** b;

}
//7.-Crea la función **separarPalabras** que acepte como argumento **un string** y devuelva **un array de palabras 'hola mundo' => [hola, mundo]**

function separarPalabras(hola="Hola Mundo"){
            return hola.split(" ");
}

//8.-Crea la función **repetirString** que acepte como argumento **un string y un número** y devuelva
//  **un string que sea el resultado de concatenar el primer string el número dado de veces**

function repetirString(str,number){
            return str.repeat (Number); 
}

let resultado= repetirString ("Hola",4);
console.log(resultado);

//9.-Crea la función **esPrimo** que acepte como argumento **un número**
//  y devuelva ****true si es primo y false si no lo es****

function esPrimo(number){
    if (number <=1) return false;
    for(let i=2; i <=Math.sqrt(number); i++)// se utilizó el metodo math.sqrt para calcular la raíz cuadrada de un número 
        if (number % i ===0){
            return false; 
        }
}
return true; 

function esPrimo(num) {
    for (let i = 2; i < num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

// ### Mezclando arrays y funciones ###

//10.-Crear la función **ordenarArray** que acepta como argumento **un array de números** 
// y devuelva un **array ordenado de menor a mayor**

function ordenarArray(araynumber) {
    return araynumber.sort(function(a, b){
    return a -b; 
    });
}

// 11.Crear la función **obtenerPares** que acepta como argumento **un array de números**
//  y devuelva un **array con los elementos pares**

function obtenerPares(arr) {
   return arr.filter((number) => number %2 === 0);
}

//12.Crear la función **pintarArray** que acepte como argumento **un array** 
// y devuelva **una cadena de texto Array entrada: [0, 1, 2] String salida: '[0, 1, 2]'**

// solucion 1
function pintaArray(arr) {
    return JSON.stringify(arr)
}


// solucion 2

function pintarArray(array) {
    let resultado = array[0].toString();
  
    for (let i = 1; i < array.length; i++) {
      resultado += ", " + array[i].toString();
    }
    return "[" + resultado + "]";
  }
    pintarArray([0, 1, 2]);


//13 Crear la función **arrayMapi** que acepte como argumento **un Array y una función**
//  y devuelva **un array en el que se haya aplicado la función a cada elemento del array**


function arrayMapi(array, funcion) {
    let arrayFuncion = [];
    for (let i = 0; i < array.length; i++) {
        arrayFuncion[i] = funcion(array[i]);
    }
    return arrayFuncion;
}

// 14  Crear la función **eliminarDuplicados** 
// que acepte como argumento **un array** y devuelva 
// **un array ç// en el que se hayan eliminado los duplicados**


// solución 1 
function eliminarDuplicados (array) {
    return [...new set (array)];
}

// solución 2

function eliminarDuplicados(array) {
    let nuevoArray = [];
    for (i = 0; i < array.length; i++) {
        if (!nuevoArray.includes(array[i])) {
          nuevoArray.push(array[i]);
        }
    }
    return nuevoArray;
  }

 //### Arrays ###

 // 15.- Crear variable de nombre **arrayNumerosNeg** declarada con un **array de números del 0 al -9 (0, -1, -2...)**

const arrayNumerosNeg = [0, -1, -2 -3, -4, -5, -6, -7, -8, -9]; 

 // 16.- Crear variable de nombre **holaMundo** declarada con valor **array con las palabras 'Hola' y 'Mundo'**

 const holaMundo = ["hola","Mundo"];
 
// 17.- Crear variable de nombre **loGuardoTodo** declarada con valor **array con valores 'hola', 'que', 23, 42.33 y 'tal'**

const loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
 
// 18.- Crear variable de nombre **arrayDeArrays** declarada con valor **array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]**

const arrayDeArrays = [
    [756, "nombre"],
    [225, "apellido"],
    [298, "direccion"]
]; 

/*### Funciones ###*/

/* 19.- Crea la función **multiplicacion** que acepte como argumento 
**dos números** y devuelva **el resultado de su multiplicación**/

function multiplicacion (a,b) {
    return a * b;
}

/*20.- Crea la función **division** que acepte como argumento 
**dos números** y devuelva **el resultado de su division**/

function division (a,b) {
    return a / b; 
}

/*21.- Crea la función **esPar** que acepte como argumento
 **un número** y devuelva **true si es par y false si es impar**/

function esPar (num) {
    if (num % 2 ===0){
        return true;
    }

    else {
        return false; 
    }
}

/*22.- Crea el array **arrayFunciones** que tenga como valor **las funciones: suma, resta 
y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)**/

function resta(a,b) {
    return a - b; 
}
const arrayFunciones = [suma, resta,  multiplicacion]; 


//### Mezclando arrays y funciones ###

// 23 .-Crear la función **ordenarArray2** que acepta como argumento 
// **un array de números** // y devuelva un **array ordenado de mayor a menor**

function ordenarArray2 (arr) {
    return arr.sort(function(a,b) {
        return b - a;
    });
}

// 24.- Crear la función **obtenerImpares** que acepta como argumento **un array de números**
//  y devuelva un **array con los elementos impares**

function obtenerImpares(arr) {
    return arr.filter((number) => number % 2 !== 0); 

}
// 25.- Crear la función **sumarArray** que acepte como argumento **un array numérico** y 
// devuelva **la suma de los números en el array Array: [1, 2, 3] resultado: 6**

function sumarArray(arr) {
    let sumaTotal = 0; 
    for (let i = 0; i < arr.length; i++) {
        multiTotal *=arr[i];
    } 
    return sumaTotal; 
}

// 26.- Crear la función **multiplicarArray** que acepte como argumento **un array numérico** y
//  devuelva **la multiplicación de los números en el array Array:  [2, 3, 4] resultado: 24**


// solucion 1 

function multiplicarArray(arr) {
    let multiTotal = 1; 
    for (let i = 0; i < arr.length; i++) {
        multiTotal *= arr[i];

    }
    return multiTotal; 
}

// solucion 2 con el metodo reduce() "toma una función de acumulación y la aplica a cada elemento" del
// array, manteniendo un valor acumulado

function multiplicarArray(arr) {
    return arr.reduce((valoracumulado, arrayactual) => valoracumulado * arrayactual, 1); 
}





































/*### Funciones ###

- [ ] 

- [ ] 6.- 

- [ ] 7.- 
- [ ] 8.- 

- [ ] 9.- Crea la función **esPrimo** que acepte como argumento **un número** y devuelva ****true si es primo y false si no lo es*****/
