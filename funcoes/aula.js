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

  console.log(valorFinal);
}

function main(){
  console.log('Programa principal');
}

main();

calcularJuros(100, 'crédito');