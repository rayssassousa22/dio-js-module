const rayssa = {
  nome: 'Rayssa da Silva Sousa',
  idade: 18,
  descrever: function(){
    console.log('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade); //usando funções dentro do objeto
  }
}; //um objeto é um local que agrupa informações diversas

const nome = 'nome';

console.log(rayssa[nome]);