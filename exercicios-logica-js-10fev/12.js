// Qual é o maior?: Receba dois números e exiba qual deles é o maior ou se são
// iguais.

const num1 = prompt("Insira o primeiro número:");

const num2 = prompt("Insira o segundo número:");

if(num1 > num2){
    alert (`${num1} é maior que ${num2}.`)
} else if (num2 > num1) {
    alert(`${num2} é maior que ${num1}.`)
} else {
    alert (`${num1} é igual a ${num2}.`)
}
