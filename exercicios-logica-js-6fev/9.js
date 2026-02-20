//9. Conversor de Moeda: Crie um algoritmo que converta um valor em Reais para Dólares,
//armazenando a taxa de câmbio em uma constante.

const realInput = prompt("Insira o valor em Reais:")
if (!/^\d+,\d{2}$/.test(realInput.trim())){
    alert("Valor inválido! Use vírgula e duas casas decimais. Ex:10,50")
    throw new Error("Valor inválido")
}

const real = Number(realInput.trim().replace(",", "."))

const dolar = real/5.21

alert(`O valor em dólares é US$${dolar.toFixed(2).replace(".",",")}`)