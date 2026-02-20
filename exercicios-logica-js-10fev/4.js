// Média Semestral: Peça as notas de 4 bimestres e calcule a média aritmética
// final.

const nota1Input = prompt("DIgite a nota 1:");
if (!/^(10,0|[0-9],[0-9])$/.test(nota1Input)) {
    alert("Valor inválido! Digite um número entre 0 e 10 com UMA casa decimal usando vírgula.");
    throw new Error("Valor inválido!");
}
const nota1 = Number(nota1Input.trim().replace(",","."));

const nota2Input = prompt("DIgite a nota 2:");
if (!/^(10,0|[0-9],[0-9])$/.test(nota2Input)) {
    alert("Valor inválido! Digite um número entre 0 e 10 com UMA casa decimal usando vírgula.");
    throw new Error("Valor inválido!");
}
const nota2 = Number(nota2Input.trim().replace(",","."));

const nota3Input = prompt("DIgite a nota 3:");
if (!/^(10,0|[0-9],[0-9])$/.test(nota3Input)) {
    alert("Valor inválido! Digite um número entre 0 e 10 com UMA casa decimal usando vírgula.");
    throw new Error("Valor inválido!");
}
const nota3 = Number(nota3Input.trim().replace(",","."));

const nota4Input = prompt("DIgite a nota 4:");
if (!/^(10,0|[0-9],[0-9])$/.test(nota4Input)) {
    alert("Valor inválido! Digite um número entre 0 e 10 com UMA casa decimal usando vírgula.");
    throw new Error("Valor inválido!");
}
const nota4 = Number(nota4Input.trim().replace(",","."));

const mediaConta= (nota1+nota2+nota3+nota4)/4;

alert(`A média é ${mediaConta.toFixed(1).replace(".",",")}.`)