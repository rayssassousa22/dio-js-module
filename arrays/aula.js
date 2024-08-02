

/* 

const alunos = ['joao', 'maria'];
//arrays fazem um conjunto de dados similares

alunos.push('rayssa');// adiciona elementos a uma array

alunos.pop(); //tira o último elemento da array original

console.log(alunos.pop()); // imprimindo na tela o elemento que foi removido

console.log(alunos);

*/

const notas = [];
let somaDasNotas = 0;

notas.push(5);
notas.push(9);
notas.push(7);
notas.push(4);
notas.push(10);

console.log(notas.length); //retorna o numero de valores que existe em uma array

for (let i = 0; i < notas.length; i++){
  somaDasNotas = somaDasNotas + notas[i];
} //percorre todas as notas dentro da array e retorna o valor somados entre elas pra obter a soma de todas as notas

console.log(somaDasNotas / notas.length); // retorna a média final do aluno