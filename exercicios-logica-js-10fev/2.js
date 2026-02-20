// Soma Simples: Peça dois números ao usuário e exiba a soma deles. (Cuidado
// com a conversão de texto para número!).

const num1Input = prompt("Digite o primeiro número:");
if(!/^-?\d+$/.test(num1Input)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const num1 = Number(num1Input);

const num2Input = prompt("Digite o primeiro número:");
if(!/^-?\d+$/.test(num2Input)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.")
    throw new Error("Valor inválido!")
}

const num2 = Number(num2Input);

const soma = num1 + num2

alert (`A soma é ${soma}.`)