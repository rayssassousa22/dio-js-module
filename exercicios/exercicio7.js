/*
const numero = 2;

for (let i = 1; i <= 10; i++){
  console.log(numero + ' x ' + i + ' = ' + numero * i);
} // o i age como o número da multiplicação da tabuada

*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numeroPar, naoEhPar;
const arrayPares = [];

for (let j = 0; j < array.length; j++){
  
  const numero = array[j];
  
  if (numero % 2 === 0){
    numeroPar = numero;
    console.log(numeroPar);
    arrayPares.push(numeroPar);
  }
}

console.log('Existem ' + arrayPares.length + ' números pares em uma lista de ' + array.length + ' números');

//Devolve somente os números pares de uma lista