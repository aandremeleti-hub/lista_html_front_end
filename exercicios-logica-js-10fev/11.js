// Aprovação Escolar: Calcule a média de um aluno. Se for 7 ou mais, exiba
// "Aprovado". Caso contrário, "Reprovado".

const nota1Input = prompt("Digite a nota 1:")
if (!/^\d+$/.test(nota1Input)) {
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}
const nota2Input = prompt("Digite a nota 2:")
if (!/^\d+$/.test(nota2Input)) {
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const nota1 = Number(nota1Input);
const nota2 = Number(nota2Input);

const media = Number(nota1 + nota2)/2

if(media >= 7){
    alert("Aprovado")
} else{
    alert("Reprovado")
}