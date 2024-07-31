const precoCombustivel = 5.79;
const kmPorLitro = 10;
let distanciaEmKm = 151;
let litrosConsumidos = distanciaEmKm / kmPorLitro;
let gastoMedio = litrosConsumidos * precoCombustivel; //diferente método mas era o mesmo raciocínio da outra

console.log(gastoMedio.toFixed(2)); //converte o valor que tem muitos numeros pra somente duas casas decimais
