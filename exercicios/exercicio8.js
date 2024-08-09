const { gets, print } = require("./main.js");

//criando as listas para usar os numeros
const n = gets(); 

/* O primeiro número quando você chama define o número de vezes que ele irá rodar!! */
let maiorNumeroPar = 0;
let menorNumeroImpar = 0;

for (let i = 0; i < n; i++) {
  const lista = gets(); //imprime todas de uma vez só
  if (lista % 2 === 0) { //ele percorre todos os números pares de uma vez
    if(lista > maiorNumeroPar){
      maiorNumeroPar = lista;
    }
  } else { //também percorre todos os números impares
    if(menorNumeroImpar === 0){
      menorNumeroImpar = lista; //coloca o primeiro numero impar encontrado na lista
    } else if (lista < menorNumeroImpar){
      menorNumeroImpar = lista; //descobre de fato o menor numero impar
    }
  }
}

print(maiorNumeroPar + ", " + menorNumeroImpar);