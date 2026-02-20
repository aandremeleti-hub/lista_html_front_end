//12. Cálculo de Salário: Armazene o valor da hora trabalhada e a quantidade de horas no
//mês. Calcule o salário bruto.

const valorHoraInput = prompt("Insira o valor de salário por hora:")
if(!/^\d+,\d{2}$/.test(valorHoraInput)){
    alert("Valor inválido! Use vírgula e duas casas decimais. Ex: 80,50")
    throw new Error("Valor inválido!")
}

const horasTrabalhadas = prompt("Insira o número de horas trabalhadas:")
if(!/^\d+d{0}$/.test(horasTrabalhadas)){
    alert("Valor inválido! Não use vírgula nem casas decimais.")
    throw new Error("Valor inválido")
}

const valorHora = Number(valorHoraInput.trim().replace(",","."))

const salario = valorHora*horasTrabalhadas

alert(`O salário bruto é R$${salario.toFixed(2).replace(".",",")}.`)