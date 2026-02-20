//25. Preço de Venda: Dado o custo de um produto e a margem de lucro desejada (%),
//calcule o valor de venda.

const custoProdutoInput = prompt("Insira o valor do produto em reais:")
if(!/^\d+,\d{2}$/.test(custoProdutoInput)){
    alert("Valor inválido! Use vírgula e duas casas decimais.");
    throw new Error("Valor inválido");
}

const margemDesejadaInput = prompt("Insira o valor da porcentagem (%) de margem de lucro desejada:")
if(!/^\d+\d{0}$/.test(margemDesejadaInput)){
    alert("Valor inválido! Não use vírgula e nem casas decimais.");
    throw new Error("Valor inválido!");
}

const custoProduto = Number(custoProdutoInput.trim().replace(",","."));

const margemDesejada = margemDesejadaInput/100;

let valorDeVenda = custoProduto + (custoProduto*margemDesejada);

alert(`O preço de venda é R$${valorDeVenda}.`)