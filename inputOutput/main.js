
const { get, print } = require('./aula'); //recebe (importa) as funções que estão sendo exportadas, estabelece uma conexão

const quantidadeInformada = get(); //quando chamamos pela primeira vez sempre retorna a quantidade de valores informadas
let maiorValor = 0;

for (let j = 0; j < quantidadeInformada; j++){
  let numeroDaVez = get();
  if (numeroDaVez > maiorValor){
    maiorValor = numeroDaVez;
  }
} //simplificando o raciocínio

print(maiorValor);