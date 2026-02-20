// Gorjeta do Garçom: Leia o valor total de uma conta de restaurante e exiba o valor
// de 10% da gorjeta.

const valorContaInput = prompt("Insira o valor da conta:")
if (!/^\d+,\d{2}$/.test(valorContaInput)) {
    alert("Valor Inválido! Use vírgula e 2 casas decimais. Ex: 80,50")
    throw new Error("Valor inválido")
}

const valorConta = Number(valorContaInput.trim().replace(",", "."));

const gorjeta = valorConta*0.1

alert(`O valor da gorjeta é R$${gorjeta.toFixed(2).replace("!.",",")}`)