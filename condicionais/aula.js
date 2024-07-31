let tipoDeCarro = "gasolina";
let precoDoCombustivel;
let kmRodados = 10;
let quilometros = 233;
let gastoMedioDaViagem = (precoDoCombustivel / kmRodados) * quilometros;

if (tipoDeCarro == "gasolina") {
  precoDoCombustivel = 5.79;
  gastoMedioDaViagem = (precoDoCombustivel / kmRodados) * quilometros;
  console.log(gastoMedioDaViagem.toFixed(2));
} else if ("etanol") {
  precoDoCombustivel = 3.96;
  gastoMedioDaViagem = (precoDoCombustivel / kmRodados) * quilometros;
  console.log(gastoMedioDaViagem);
}

// = indica atribuição
// == igualdade
// === pra retornar de fato o valor verdadeiro (diferencia numero, string e etc)
