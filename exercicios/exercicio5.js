class TipoDeCarros {
  marca;
  cor;
  kmRodados;
  quilometros;

  constructor (marca, cor, kmRodados, quilometros){
    this.marca = marca;
    this.cor = cor;
    this.kmRodados = kmRodados;
    this.quilometros = quilometros;
  }

  calcularGastoCombustivelViagem(precoCombustivel){
    return precoDaViagem = (precoCombustivel / this.kmRodados) * this.quilometros;
  }
}

let precoDaViagem;
let precoCombustivel = 5.79;

const tesla = new TipoDeCarros('Tesla', 'branco', 10, 73); //criando um objeto invisível
const ferrari = new TipoDeCarros('Ferrari', 'azul', 8, 73);
const bmw = new TipoDeCarros('BMW', 'preto', 11, 73);

function printarTotalGasto(){
  console.log('Esse carro é da marca ' + tesla.marca + ' da cor ' + tesla.cor + ', que roda ' + tesla.kmRodados + 'km por litro e que estava fazendo o percurso de ' +  tesla.quilometros + 'km para uma viagem que custou R$' + tesla.calcularGastoCombustivelViagem(precoCombustivel).toFixed(2) + ' de gasolina\n');

  console.log('Esse carro é da marca ' + ferrari.marca + ' da cor ' + ferrari.cor + ', que roda ' + ferrari.kmRodados + 'km por litro e que estava fazendo o percurso de ' +  ferrari.quilometros + 'km para uma viagem que custou R$' + ferrari.calcularGastoCombustivelViagem(precoCombustivel).toFixed(2) + ' de gasolina\n');

  console.log('Esse carro é da marca ' + bmw.marca + ' da cor ' + bmw.cor + ', que roda ' + bmw.kmRodados + 'km por litro e que estava fazendo o percurso de ' +  bmw.quilometros + 'km para uma viagem que custou R$' + bmw.calcularGastoCombustivelViagem(precoCombustivel).toFixed(2) + ' de gasolina');
}

printarTotalGasto();