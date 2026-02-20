// Par ou Ímpar: Crie um algoritmo que receba um número e informe se ele é par ou
// ímpar (Dica: use o operador %).

const numero = prompt("Digite um número:")
if (!/^-?\d+$/.test(numero)) {
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
} else if (numero % 2 === 0) {
    alert("Seu número é par.")
} else {
    alert("Seu número é impar.")
}