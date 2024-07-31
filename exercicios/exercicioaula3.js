/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- 1 = À vista Débito, recebe 10% de desconto;
- 2 = À vista no dinheiro ou pix, recebe 15% de desconto;
- 3 = Em duas vezes, preço normal de etiqueta sem juros;
- 4 = Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

const precoEtiqueta = 50;
let modoDePagamento = 1;
let precoFinal = 0;

if (modoDePagamento === 1){
  precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
  console.log("Preço a pagar: " + precoFinal);
} else if (modoDePagamento === 2){
  precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
  console.log("Preço a pagar: " + precoFinal);
} else if (modoDePagamento === 3){
  precoFinal = precoEtiqueta;
  console.log("Preço a pagar: " + precoFinal);
} else {
  precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
  console.log("Preço a pagar: " + precoFinal);
}
