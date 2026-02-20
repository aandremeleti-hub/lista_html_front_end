//4. Troca de Valores: Declare duas variáveis, a e b. Crie um algoritmo que troque os valores
//entre elas de forma que a receba o valor de b e vice-versa.

let a = Number(prompt("Digite o valor a:"));
let b = Number(prompt("Digite o valor b:"));

[a,b] = [b,a]

alert(`Agora o valor de a é ${a} e o valor de b é ${b}`)


