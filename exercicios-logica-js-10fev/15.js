// 15. Desconto de Compra: Se o valor de uma compra for maior que R$ 100,00,
// aplique um desconto de 10%. Exiba o valor final.

const valorCompraInput = prompt("Digite o valor de compra do produto:");
if (!/^\d+,\d{2}$/.test(valorCompraInput)) {
    alert("Valor Inválido! Use vírgula e 2 casas decimais. Ex: 80,50")
    throw new Error("Valor inválido")
}

const valorProduto = Number(valorCompraInput.trim().replace(",","."));

const desconto = 0.1;

const valorComDesconto = valorProduto - (valorProduto*desconto);

if(valorProduto > 100){
    alert(`Sua compra tem um valor maior que R$100,00, portanto você ganhou 10% de desconto (aproximadamente R$${(valorProduto*desconto).toFixed(2).replace(".",".")}) e a sua compra agora ficou no total de R$${valorComDesconto.toFixed(2).replace(".",",")}.`)
} else {
    alert(`Sua compra não tem desconto.`)
}