// Fatorial Simples: Receba um número e calcule o seu fatorial (Ex: 5! = 54321).

const numeroInput = prompt("Digite um número inteiro não negativo:");

if (!/^\d+$/.test(numeroInput)) {
    alert("Digite apenas números inteiros não negativos.");
    throw new Error("Entrada inválida.");
}

const numero = Number(numeroInput);

let fatorial = 1;

for(let i=numero; i>1; i--){
    fatorial = fatorial * i;
}

alert(`${numero}! = ${fatorial}`)