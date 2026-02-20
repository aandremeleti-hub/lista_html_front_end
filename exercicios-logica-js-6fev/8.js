//8. Cálculo de Desconto: Dado um valor de produto e uma porcentagem de desconto,
//calcule o preço final.

let valorInput = prompt("Insira o valor do produto:")
if (!/^\d+,\d{2}$/.test(valorInput.trim())){
    alert("Valor inválido! Use vírgula e duas casas decimais. Ex 10,50")
    throw new Error("Valor inválido")
}

const valor = Number(valorInput.trim().replace(",","."))

let porcentagemDescontoInput = prompt("Insira a porcentagem de desconto:")
if(!/^\d+$/.test(porcentagemDescontoInput.trim())){
    alert("Valor inválido! Não use casas decimais. Somente valores inteiros. Ex: 25")
    throw new Error("Desconto inválido")
}

let porcentagemDesconto = porcentagemDescontoInput/100

let precoFinal = valor - (valor*porcentagemDesconto)

console.log(`O valor final do produto com desconto é R$${precoFinal}`)