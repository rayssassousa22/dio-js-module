class Pessoa{
  nome;
  pesoEmKg;
  alturaEmMetros;

  constructor (nome, peso, altura){
    this.nome = nome;
    this.pesoEmKg = peso;
    this.alturaEmMetros = altura;
  }

  calcularImc(){
    return this.pesoEmKg / Math.pow(this.alturaEmMetros, 2);
  }
}

const pessoa = new Pessoa('José', 70, 1.75);

console.log(pessoa.nome + ' tem o IMC de ' + pessoa.calcularImc().toFixed(2));