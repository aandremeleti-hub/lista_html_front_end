// Busca na Lista: Crie um array de nomes. Peça um nome ao usuário e diga se esse
// nome está na lista ou não.

let nomes = ["João", "Maria", "José"];

let nomeConsulta = prompt("Qual nome você quer consultar?");

if (nomeConsulta === null || nomeConsulta.trim() === "") {
    alert("Nome inválido.");
    throw new Error("Entrada inválida.");
}

if(nomes.includes(nomeConsulta)){
    alert(`${nomeConsulta} está na lista.`)
} else {
    alert(`${nomeConsulta} não está na lista.`)
}


