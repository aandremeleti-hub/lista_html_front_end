const num1 = 8;
const num2 = "8";
const num3 = 6;

console.log ("verificar se são iguais identidade:" + num1 === num2);
console.log ("verificar se são iguais igualdade:" + num1 === num3);
console.log (`verificar se ${num1} é maior que ${num3}: ${num1 > num3}`)
console.log (`verificar se ${num1} (int) é menor que ${num2} (string): ${num1} < ${num2}`)
/*Conversor de temperatura:    

let celsius = prompt("Informe a temperatura em celsius para ser convertida em Fahrenheit:");
const fahrenheit = (celsius * 9/5) + 32;
alert(`${celsius} em Celsius é ${fahrenheit} Fahrenheit.`)

*/

/*8. Cálculo de Desconto: Dado um valor de produto e uma porcentagem de desconto,
calcule o preço final. 
let valor_produto = prompt ("Informe o valor do produto");
let porcentagem_desconto = prompt("Informe o valor do desconto");
const porcentagem_desconto = 5;
console.log(typeof(valor_produto));
if (typeof(valor_produto) !== Number){
    alert (`Você está enviando um valor que não é numérico`)
} else if (valor_desconto !== Number){
    alert(`O valor do desconto deve ser um número`)
}
const valor_desconto = valor_produto * porcentagem_desconto/100;
alert(`Para um produto que custa ${valor_produto}, temos um desconto de ${porcentagem_desconto}%, resulta em ${valor_produto - valor_desconto}`)
*/

/*Preço de Venda: Dado o custo de um produto e a margem de lucro desejada (%),
calcule o valor de venda. */
 
let custo = prompt('Informe o valor do custo do produto:')
let margem_lucro = prompt('Informe sua margem de lucro em porcentagem')

let lucro = custo * margem_lucro/100

console.log (`O lucro é R$${lucro}`)