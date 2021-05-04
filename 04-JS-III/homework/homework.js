// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]
  // Devuelve el primer elemento de un array
  // Tu código:
}


function devolverUltimoElemento(array) {
  return array[array.length - 1]    
  // Devuelve el último elemento de un array
  // Tu código:
}


function obtenerLargoDelArray(array) {
  return array.length
  // Devuelve el largo de un array
  // Tu código:
}


function incrementarPorUno(array) { 
  for(var i = 0 ; i < array.length ; i++) {
     array[i] = array[i] + 1
  }
  return array
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
}


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento)
  return array
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
  return array
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}


function dePalabrasAFrase(palabras) {
  return palabras.join(" ")
  
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
}


function arrayContiene(array, elemento) {  //LO VI EN INTERNET ...
  for (let i = 0; i < array.length; i++){
    if (elemento === array[i]) 
      return true
    }
    return false 
  
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
//   var arr = [10, 20];   // tenemos un array de 2 elementos, 10 y 20
// var suma = 0;           // creamos una variable que va a contener la suma total de los elementos del arrau
// for(var i = 0; i< arr.length /* arr.length === 2*/ ; i++) {  // metodo length sirve para saber la longitus de strings y arrays
//    suma = suma + arr[i] // en la primera vuelta suma queda en 10, en la segunda vuelta queda 30
//    // 10 = 10 + 20
// }

var sumaTotal = 0
for(var i = 0; i < numeros.length; i++){
  sumaTotal = sumaTotal + numeros[i]
  //sumaTotal += mumeros[i] sois igualiticos
}
return sumaTotal
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
var acumulador=0
for(var i=0; i < resultadosTest.length; i++) {
  acumulador= acumulador + resultadosTest[i]
}
promedio= acumulador / resultadosTest.length
return promedio
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroMasGrande= 0
  for( var i = 0; i < numeros.length; i++) {
    if(numeros[i] > numeroMasGrande)
    numeroMasGrande= numeros[i]
  }
  return  numeroMasGrande
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulador= 1
  if(arguments.length===0) {
    return 0
    } else if(arguments.length===1)
    return arguments[0] 
    else {
      for(var i = 0; i < arguments.length; i++)
      acumulador= acumulador *  arguments[i]
    }
    return acumulador
}


function cuentoElementos(arreglo){
  var numeros = 0
for  (var i = 0; i < arreglo.length; i++) {
  if(arreglo[i] > 18)
  numeros= numeros + 1
} 
return numeros

  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  // for (let i = 0; i < array.length; i++){
  //   if (elemento === array[i]) 
  //     return true
  //   }
  //   return false 
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7) {
    return "Es fin de semana"
  }
  return "Es dia Laboral"
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n.toString()[0] === "9") {
  return true
  }
  return false
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var sonIguales= arreglo[0]
  for(var i = 0; i < arreglo.length; i++) {
    if( arreglo[i] !== sonIguales)
    return false
  }
  return true
} 



function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray=[]
  for(var i = 0; i < array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre")
    nuevoArray.push(array[i])
  }
  if(nuevoArray.length === 3)
  return nuevoArray
  else {
    return "No se encontraron los meses pedidos"
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var mayoresA100=[]
for(var i = 0; i < array.length; i++) {
  if(array[i] > 100)
  mayoresA100.push(array[i])
}
return mayoresA100
}
// var numeros = 0
// for  (var i = 0; i < arreglo.length; i++) {
//   if(arreglo[i] > 18)
//   numeros= numeros + 1
// } 
// return numeros

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array2=[]
  var numero= numero
  for(var i = 0; i < 10; i++) {
    if(numero === i) {
      break;
    }
    numero= numero + 2
    array2.push(numero)
  }
  if(i < 10) {
  return "Se interrumpió la ejecución"
} else {
  return array2
}
}
function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
var arrayy=[]
var numero = numero
for(var i = 0; i < 10; i++) {
  if (i === 5) {
     continue;
   }
   numero= numero + 2
   arrayy.push(numero)
}
return arrayy
}
// if (i === 5) {
//   continue;
// }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
