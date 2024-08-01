class Pessoa {
  nome;
  idade;

  descrever(){
    return ('Meu nome é ' + this.nome + ' e minha idade é ' + this.idade);
  }
}


const rayssa = new Pessoa();
rayssa.nome = 'Rayssa da Silva Sousa';
rayssa.idade = 18;

const izabel = new Pessoa();
izabel.nome = 'Izabel Moraes Cabalini';
izabel.idade = 17;

console.log(rayssa.descrever());
console.log(izabel.descrever());