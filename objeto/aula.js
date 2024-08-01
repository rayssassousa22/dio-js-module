

class Pessoa {
  nome;
  idade;
  localDeNascimento;
  dataDeNascimento;

  constructor (nome, idade, localDeNascimento){
    this.nome = nome;
    this.idade = idade;
    this.localDeNascimento = localDeNascimento;
    this.dataDeNascimento = 2024 - idade;
  } //faz com que toda vez que esse código opere cobre do usuário seu nome e idade

  descrever(){
    return ('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade + '. Eu nasci em ' + this.localDeNascimento + ' no ano de ' + this.dataDeNascimento);
  }
} // uma classe define tipo uma estrutura base de um objeto e com base em uma classe podemos criar objetos invisíveis e atribuir valores para usá-los mais tarde

function compararPessoas(pessoa1, pessoa2){
  if (pessoa1.idade > pessoa2.idade){
    console.log(pessoa1.nome + ' é a mais velha');
  } else if (pessoa2.idade > pessoa1.idade){
    console.log(pessoa2.nome + ' é a mais velha');
  } else {
    console.log(pessoa1.nome + ' e ' + pessoa2.nome + ' tem a mesma idade');
  }
}

const rayssa = new Pessoa('Rayssa', 19, 'Bom Jesus do Itabapoana'); //com o constructor ele consegue receber parâmetros
const izabel = new Pessoa('Izabel', 20, 'São José do Calçado');

compararPessoas(rayssa, izabel);