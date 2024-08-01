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


const rayssa = new Pessoa('Rayssa', 19, 'Bom Jesus do Itabapoana'); //com o constructor ele consegue receber parâmetros
const izabel = new Pessoa('Izabel', 18, 'São José do Calçado');

console.log(rayssa.descrever());
console.log(izabel.descrever());