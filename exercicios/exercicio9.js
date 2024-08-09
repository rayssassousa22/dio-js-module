const { gets, print } = require("./main.js");

const salarioValorBruto = 2000;
const beneficiosAdicionais = 250;

//aliquotas 
//   0.00 a 1100.00 = 5%
//   1100.01 a 2500.00 = 10%
//   + 2500.00 = 15%

let percentualImpostoSalarial = 0;

percentualSobreSalario(salarioValorBruto);

let resultado = (salarioValorBruto - (salarioValorBruto * percentualImpostoSalarial)) + beneficiosAdicionais;

print("O salário líquido do funcionário é de R$" + resultado.toFixed(2));

function percentualSobreSalario(salario){
  if(salario > 0.00 && salario <= 1100.00){
    percentualImpostoSalarial = 0.05;
    return percentualImpostoSalarial;
  } else if (salario >=1100.01 && salario <= 2500.00){
    percentualImpostoSalarial = 0.1;
    return percentualImpostoSalarial;
  } else if (salario > 2500.00){
    percentualImpostoSalarial = 0.15;
    return percentualImpostoSalarial;
  }
}
