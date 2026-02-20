//24. Inversão de String: (Lógica) Tente pensar em como armazenar uma palavra e exibir seu
//tipo e comprimento.

const palavra = prompt("Escreva uma palavra:")

if (palavra !== null) {
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida = invertida + palavra[i];
    }

    console.log("Original", palavra)
    console.log("Invertida", invertida)

}



