// Função de Soma: Escreva uma função chamada somar(a, b) que retorne o
// resultado da soma. Chame essa função passando dois números digitados pelo
// usuário.

function somar (a, b){
    return a + b;
}

const num1Input = prompt("Digite o primeiro número:");
const num2Input = prompt("Digite o segundo número:");

if (!/^-?\d+$/.test(num1Input) || !/^-?\d+$/.test(num2Input)) {
    alert("Digite apenas números inteiros.");
    throw new Error("Entrada inválida.");
}

const num1 = Number(num1Input);
const num2 = Number(num2Input);

const resultado = somar(num1,num2)

alert(`O resultado da soma é ${resultado}.`)