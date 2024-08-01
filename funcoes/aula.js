function calcularJuros(valorInicial, modoDePagamento){
  let valorFinal;
  if (modoDePagamento === 'débito à vista'){
    valorFinal = valorInicial - (valorInicial * 0.15);
  } else if (modoDePagamento === 'pix' || modoDePagamento === 'dinheiro'){
    valorFinal = valorInicial - (valorInicial * 0.2);
  } else if (modoDePagamento === 'crédito 2 vezes'){
    valorFinal = valorInicial;
  } else if (modoDePagamento === 'crédito'){
    valorFinal = valorInicial + (valorInicial * 0.1);
  }

  return valorFinal;
}

(function (){
  console.log('Programa principal');
})(); //função invocada automaticamente onde se pode retirar o nome e operar somente uma vez, não podendo ser inovocada mais tarde no código

const valorAPagar = calcularJuros(100, 'crédito 2 vezes');
console.log(valorAPagar);