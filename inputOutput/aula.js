const numeroSorteado = [5, 50, 10, 98, 23, 100];
let i = 0;

function get(){
  const valor = numeroSorteado[i];
  i++;
  return valor;
} // uma função pra pegar input do usuário

function print(texto){
  console.log(texto);
} //printa na tela esse input

module.exports = {get, print}; //exporta essa duas funções para os arquivos que estão importando exportarem