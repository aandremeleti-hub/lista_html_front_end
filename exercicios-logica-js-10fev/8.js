// Antecessor e Sucessor: Receba um número inteiro e mostre quem vem antes e
// quem vem depois dele.

const numeroInput = prompt("Insira um número:")
if(!/^-?\d+$/.test(numeroInput)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const numero = Number(numeroInput);

const sucessor = numero + 1;

const antecessor = numero - 1;

alert(`O antecessor do número ${numero} é ${antecessor} e o sucessor é ${sucessor}.`)