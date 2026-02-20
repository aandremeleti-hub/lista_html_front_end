// Lista de Compras: Crie um array com 3 frutas. Peça ao usuário para adicionar
// uma quarta fruta e exiba a lista completa no console.

const frutas = ["Maçã", "Banana", "Morango"]

const novaFruta = prompt("Insira uma nova fruta:")

if (novaFruta === null || novaFruta.trim() === "") {
    alert("Fruta inválida.");
    throw new Error("Entrada inválida.");
}

frutas.push(novaFruta.trim());

console.log("Lista completa de frutas");
console.log(frutas)