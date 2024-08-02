/*
const numero = 2;

for (let i = 1; i <= 10; i++){
  console.log(numero + ' x ' + i + ' = ' + numero * i);
} // o i age como o número da multiplicação da tabuada

*/

const array = [90, 2324, 3567, 773, 2, 688, 145];

let numeroPar, naoEhPar;
const arrayPares = [];

for (let j = 0; j < array.length; j++){
  if (array[j] % 2 === 0){
    numeroPar = array[j];
    console.log(numeroPar);
    arrayPares.push(numeroPar);
  } else {
    naoEhPar = array[j];
  }
}

console.log('Existem ' + arrayPares.length + ' números pares em uma lista de ' + array.length + ' números');

//Devolve somente os números pares de uma lista