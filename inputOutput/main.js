
const { get, print } = require('./aula'); //recebe (importa) as funções que estão sendo exportadas, estabelece uma conexão

let maiorValor = 0;

for (let j = 0; j < 5; j++){
  let numeroDaVez = get();
  if (numeroDaVez > maiorValor){
    maiorValor = numeroDaVez;
  }
} //simplificando o raciocínio

print(maiorValor);