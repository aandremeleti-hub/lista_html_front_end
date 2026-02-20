//23. Potenciação: Crie um algoritmo que eleve um número 'base' a um expoente 'x' e
//armazene o resultado.

const base = prompt("Insira o valor do número base:")

const expoente = prompt("Insira o valor do expoente:")

let resultado = 1

for(let i=1; i <= expoente; i++){
    resultado = resultado*base
}

alert(`O resultado é ${resultado}.`)