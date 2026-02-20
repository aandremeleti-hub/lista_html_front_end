// Soma Acumulada: Peça para o usuário digitar 5 números seguidos e, ao final,
// exiba a soma total de todos eles.

let soma = 0;

for(let i=1; i<=5; i++){
    const numeroInput = prompt(`Insira o ${i}º número`);

    if(!/^-?\d+$/.test(numeroInput)) {
        alert("Valor inválido! Digite apenas números inteiros.");
        throw new Error("Entrada inválida.");
    }

    const numero = Number(numeroInput);

    soma += numero;
}

alert(`A soma total é ${soma}.`)