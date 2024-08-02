
const { get, print } = require('./aula'); //recebe (importa) as funções que estão sendo exportadas, estabelece uma conexão

const array = [];

for (let j = 0; j < 6; j++){
  let numeroDaVez = get();
  array.push(numeroDaVez);
} //coloca os valores da lista do input no array pra verificação

print(array);

let maiorValor = 0;

for (let i = 0; i < array.length; i++){
  const numeroSelecionado = array[i]; //pega o primeiro numero na array de numeros sorteados
  if (numeroSelecionado > maiorValor){
    maiorValor = numeroSelecionado;
  } // faz a verificação se o valor selecionado é maior que seu valor anterior
}

print(maiorValor);