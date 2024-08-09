const armario = [5, 3, 4, 17, 10, 8, 1];
let index = 0;

function get() {
  let numeroDoArmario = armario[index];
  index++;
  return numeroDoArmario;
} // uma função pra pegar input do usuário

function print(texto) {
  console.log(texto);
} //printa na tela esse input

module.exports = { get, print };
