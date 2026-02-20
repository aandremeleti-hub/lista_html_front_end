//20. Divisor de Conta: Armazene o valor total de uma conta e a quantidade de pessoas.
//Calcule quanto cada um deve pagar.

const valorContaInput = prompt("Insira o valor total da conta em R$:")
if(!/^\d+,\d{2}$/.test(valorContaInput)){
    alert("Valor inválido. Use vírgula e duas casas decimais.");
    throw new Error("Valor inválido");
}

const valorConta = Number(valorContaInput.trim().replace(",","."));

const numeroDePessoas = prompt("Insira o número de pessoas:");
if(!/^\d+\d{0}$/.test(numeroDePessoas)){
    alert("Valor inválido. Não use vírgula e nem casas decimais.");
    throw new Error("Valor inválido");
}

const contaDividida = valorConta/numeroDePessoas

alert(`O valor total por pessoa é R$${contaDividida.toFixed(2).replace(".",",")}.`)
