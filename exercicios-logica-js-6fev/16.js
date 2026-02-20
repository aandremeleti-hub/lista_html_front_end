//16. Conversor de Metros: Crie um algoritmo que converta um valor em metros para
//centímetros e milímetros.

const valorMetros = prompt("Insira o valor em metros:")
if (!/^\d+\d{0}$/.test(valorMetros)) {
    alert("Valor inválido! Não use vírgula e nem casas decimais.")
    throw new Error("Valor inválido!")
}

const valorCm = valorMetros / 100

const valorMm = valorMetros / 1000

alert(`${valorMetros}m equivale a ${valorCm}cm e a ${valorMm}mm.`)