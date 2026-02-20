// Maior de Idade: Receba a idade de uma pessoa e diga se ela já é maior de idade
// (18 anos ou mais).

const idade = prompt("Digite sua idade:")
if (!/^\d+$/.test(idade)) {
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
} else if (idade >= 18) {
    alert("Você é maior de idade.")
} else {
    alert("Você é menor de idade.")
}