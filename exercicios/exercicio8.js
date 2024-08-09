const { gets, print } = require("./main.js");

//criando as listas para usar os numeros
const n = gets(); 

/* O primeiro número quando você chama define o número de vezes que ele irá rodar!! */
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;
/*const numerosPares = [];
const numerosImpares = [];*/

//vai colocar os inputs em uma lista e comparar se é par ou ímpar
for (let i = 0; i < n; i++) {
  const lista = gets();
  if (lista % 2 === 0) {
    if(lista > maiorNumeroPar){
      maiorNumeroPar = lista;
    }
  } else {
    if(lista <= menorNumeroImpar){
      menorNumeroImpar = lista;
    }
  }
}

print(maiorNumeroPar + " " + menorNumeroImpar);