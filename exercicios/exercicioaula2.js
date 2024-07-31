/* O IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = Peso / (altura + altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos:
- Abaixo de 18.5 - abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 obeso;
- Acima de 40 obesidade grave;

*/

const pesoEmKg = 130;
const alturaEmMetros = 1.74;
let imc = pesoEmKg / Math.pow(alturaEmMetros, 2); //uma biblioteca que tem a funcao pow que calcula a potenciacao

if (imc < 18.5){
  console.log("abaixo do peso");
}else if ((imc >= 18.5 && imc < 25)){
  console.log("peso normal");
} else if ((imc >= 25 && imc < 30)){
  console.log("acima do peso");
} else if ((imc >=30 && imc < 40)){
  console.log("obeso");
} else {
  console.log("obesidade grave");
}