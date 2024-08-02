const notas = [3, 2, 4, 5, 7];
let index = 0;

function get() {
  let notaDoAluno = notas[index];
  index++;
  return notaDoAluno;
} // uma função pra pegar input do usuário

function print(texto) {
  console.log(texto);
} //printa na tela esse input

module.exports = { get, print };
