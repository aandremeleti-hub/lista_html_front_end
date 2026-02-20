//18. Reajuste Salarial: Aplique um aumento de 15% a uma variável salarioAtual.

const salarioAtualInput = prompt("Insira o valor do salário atual:")
if(!/^\d+,\d{2}$/.test(salarioAtualInput)){
    alert("Valor inválido! Use vírgula e 2 casas decimais.");
    throw new Error("Valor inválido!");
}

const salarioAtual = Number(salarioAtualInput.trim().replace(",","."));

const salarioAumentado = salarioAtual+(salarioAtual*0.15)

alert(`O salário atual, com um aumento de 15% fica R$${salarioAumentado.toFixed(2).replace(".",",")}.`)