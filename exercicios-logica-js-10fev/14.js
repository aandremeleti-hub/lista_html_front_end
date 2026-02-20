// Login Simples: Crie uma variável fixa chamada senhaCorreta = "1234". Peça ao
// usuário uma senha e diga se o acesso foi "Concedido" ou "Negado".

const senhaInput = prompt("Digite sua senha:");

const senhaCorreta = "1234";

if(senhaInput === senhaCorreta){
    alert("Senha Correta");
} else {
    alert("Senha incorreta!");
}