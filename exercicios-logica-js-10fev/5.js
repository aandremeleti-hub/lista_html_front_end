// Conversor de Medidas: Crie um programa que receba um valor em metros e
// exiba o equivalente em centímetros.

const valorMetros = prompt("Digite o valor em metros:");
if (!/^\d+$/.test(valorMetros)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const valorCm = valorMetros*100

alert(`${valorMetros} metros corresponde à ${valorCm}cm.`)