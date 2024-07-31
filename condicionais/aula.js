let tipoDeCarro = "etanol";
const precoDoEtanol = 3.96;
const precoDaGasolina = 5.79;
const kmRodados = 10;
let quilometros = 233;

if (tipoDeCarro === "gasolina") {
  gastoMedioDaViagem = (precoDaGasolina / kmRodados) * quilometros;
  console.log(gastoMedioDaViagem.toFixed(2));
} else {
  gastoMedioDaViagem = (precoDoEtanol / kmRodados) * quilometros;
  console.log(gastoMedioDaViagem);
}

// = indica atribuição
// == igualdade
// === pra retornar de fato o valor verdadeiro (diferencia numero, string e etc)
