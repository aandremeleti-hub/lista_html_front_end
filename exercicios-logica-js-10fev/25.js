// Desafio Final (Mini-Sistema): Crie um algoritmo que pergunte quantos produtos
// o usuário quer cadastrar. Depois, use um laço para pedir o nome de cada produto
// e, ao final, exiba todos os nomes cadastrados.

// 1. Perguntar quantidade
const quantidadeInput = prompt("Quantos produtos você quer cadastrar?");

// 2. Validar número inteiro positivo
if (!/^\d+$/.test(quantidadeInput)) {
    alert("Digite apenas números inteiros positivos.");
    throw new Error("Entrada inválida.");
}

const quantidade = Number(quantidadeInput);

// 3. Criar array vazio
const produtos = [];

// 4. Loop para cadastrar produtos
for (let i = 1; i <= quantidade; i++) {

    const nomeProduto = prompt(`Digite o nome do produto ${i}:`);

    if (nomeProduto === null || nomeProduto.trim() === "") {
        alert("Nome inválido.");
        throw new Error("Entrada inválida.");
    }

    produtos.push(nomeProduto.trim());
}

// 5. Exibir resultado
console.log("Produtos cadastrados:");

for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1} - ${produtos[i]}`);
}
