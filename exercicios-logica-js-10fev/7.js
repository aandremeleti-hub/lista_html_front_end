// Área de Retângulo: Peça a base e a altura de um retângulo e exiba sua área (Base
// x Altura).

const base = prompt("Insira o valor da base do triângulo em cm:")
if(!/^-?\d+$/.test(base)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const altura = prompt("Insira o valor da altura do triângulo em cm:")
if(!/^-?\d+$/.test(altura)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const area = base*altura

alert(`A área do triângulo é ${area}cm.`)

