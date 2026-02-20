//Calculadora de Idade: Receba o ano de nascimento do usuário e o ano atual.
//Calcule e mostre a idade aproximada.

const nascimento = prompt("Digte o ano de nascimento:")
if(!/^\d+$/.test(nascimento)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const anoAtual = prompt("Em que ano estamos?")
if(!/^\d+$/.test(anoAtual)){
    alert("Valor inválido! Use apenas números, sem vírgula e sem casas decimais.");
    throw new Error("Valor inválido!");
}

const idade = anoAtual - nascimento

alert (`Você tem aproximandamente ${idade} anos.`)