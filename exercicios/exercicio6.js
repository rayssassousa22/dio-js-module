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

const pessoa = new Pessoa('José', 120, 1.75);

function classificarImc(imc){
  if (imc < 18.5){
    return 'Abaixo do peso';
  } else if ((imc >= 18.5 && imc < 25)){
    return 'Peso Normal';
  } else if ((imc >= 25 && imc < 30)){
    return 'Acima do peso';
  } else if ((imc >=30 && imc < 40)){
    return 'Obeso';
  } else {
    return 'Obesidade grave';
  }
}

console.log(pessoa.nome + ' tem o IMC de ' + pessoa.calcularImc().toFixed(2) + ' e está com ' + classificarImc(pessoa.calcularImc()));