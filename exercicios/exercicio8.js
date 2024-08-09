const { gets, print } = require("./main.js");


const n = gets(); 


let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
  const lista = gets(); //imprime todas de uma vez só

  
  if (lista % 2 === 0) {
    if(maiorNumeroPar === null){
      maiorNumeroPar = lista;
    } else if(lista > maiorNumeroPar){
      maiorNumeroPar = lista;
    }
    
  } else { //também percorre todos os números impares
    if(menorNumeroImpar === null){
      menorNumeroImpar = lista;
    } else if (lista < menorNumeroImpar){
      menorNumeroImpar = lista; //descobre de fato o menor numero impar
    }
  }
}

print(maiorNumeroPar + ", " + menorNumeroImpar);