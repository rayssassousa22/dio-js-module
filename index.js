const precoCombustivel = 5.79;
const kmPorLitro = 10;
let distanciaEmKm = 100;
let litrosConsumidos = distanciaEmKm / kmPorLitro;
let gastoMedio = litrosConsumidos * precoCombustivel; //diferente método mas era o mesmo raciocínio da outra

console.log(gastoMedio);
