const { get, print } = require("./main.js");

//criando as listas para usar os numeros
const lista = [];
const numerosPares = [];
const numerosImpares = [];

//vai colocar os inputs em uma lista e comparar se é par ou ímpar
for (let i = 0; i < 7; i++) {
  lista[i] = get();
  if (lista[i] % 2 == 0) {
    numerosPares.push(lista[i]);
  } else {
    numerosImpares.push(lista[i]);
  }
}

//vai chegar a condição do desafio
function menorEhMaior(pares, impares) {
  let maior = pares[0];
  let menor = impares[0];

  for (let count = 0; count < pares.length; count++) {
    if (pares[count] > maior) {
      maior = pares[count];
    }
  }

  print(maior);

  for (let c = 0; c < impares.length; c++) {
    if (impares[c] < menor) {
      menor = impares[c];
    }
  }

  print(menor);
}
menorEhMaior(numerosPares, numerosImpares);
