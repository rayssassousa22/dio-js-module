/*function escrevaMeuNome(nome){
  return ("Meu nome é: " + nome);
}

function verificarIdade(idade){
  if (idade < 18){
    console.log(escrevaMeuNome('Rayssa') + '\nVocê é menor de idade');
  } else {
    console.log('Você é de maior!');
  }
}

verificarIdade(17);*/

const { X509Certificate } = require("crypto");

function calcularJuros(precoNormal, formaDePagamento) {
  if (formaDePagamento === 1) {
    total = precoNormal - precoNormal * 0.1;
    return total;
  } else if (formaDePagamento === 2) {
    total = precoNormal - precoNormal * 0.15;
    return total;
  } else if (formaDePagamento === 3) {
    total = precoNormal;
    return total;
  } else {
    total = precoNormal + precoNormal * 0.1;
    return total;
  }
}

console.log('Você irá pagar: ' + calcularJuros(50, 4));
