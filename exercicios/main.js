const armario = [6, 3, 4, 17, 10, 8, 1];
let index = 0;

function gets() {
  let numeroDoArmario = armario[index];
  index++;
  return numeroDoArmario;
} // uma função pra pegar input do usuário

function print(texto) {
  console.log(texto);
} //printa na tela esse input

module.exports = { gets, print };
