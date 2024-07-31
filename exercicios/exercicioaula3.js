/* 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.

*/

const precoEtiqueta = 50;
let modoDePagamento = "débito à vista";
let precoFinal = 0;

if (modoDePagamento === "débito à vista"){
  precoFinal = precoEtiqueta - (precoEtiqueta * 0.1);
  console.log("Preço a pagar: " + precoFinal);
} else if ((modoDePagamento === "dinheiro à vista" || modoDePagamento === "pix")){
  precoFinal = precoEtiqueta - (precoEtiqueta * 0.15);
  console.log("Preço a pagar: " + precoFinal);
} else if ((modoDePagamento === "crédito até 2 vezes" || modoDePagamento === "2 vezes")){
  precoFinal = precoEtiqueta;
  console.log("Preço a pagar: " + precoFinal);
} else {
  precoFinal = precoEtiqueta + (precoEtiqueta * 0.1);
  console.log("Preço a pagar: " + precoFinal);
}
