//13. Verificador de Paridade: Crie um algoritmo que armazene o resto da divisão de um
//número por 2 para identificar se ele é par.

const numero = prompt("Insira um número:");
if(!/^\d+d{0}$/.test(numero)){
    alert("Número inválido! Insira um número sem vírgula e sem casas decimais.")
    throw new Error("Valor inválido")
}

const restoDivisao = numero % 2;

if(restoDivisao === 0){
    alert(`O número ${numero} é par.`)
} else {
    alert(`O número ${numero} é impar.`)
}