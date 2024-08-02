const { get, print } = require('./aula'); //recebe (importa) as funções que estão sendo exportadas, estabelece uma conexão

const pessoa = {
  nome: 'rayssa'
};

const { nome } = pessoa;

print(get());
print(nome);
//seria como se fizesse const nome = pessoa.nome;