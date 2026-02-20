//14. Gorjeta do Garçom: Leia o valor de uma conta de restaurante e calcule 10% de
//gorjeta, armazenando o total a pagar.

const valorContaInput = prompt("Qual foi o valor da conta?")
if (!/^\d+,\d{2}$/.test(valorContaInput)) {
    alert("Valor inválido! Utilize vírgula e duas casas decimais.")
    throw new Error("Valor inválido")
}

const valorConta = Number(valorContaInput.trim().replace(",","."))

const gorjeta = valorConta/10

alert(`O valor da gorjeta é R$${gorjeta.toFixed(2).replace(".",",")}.`)

