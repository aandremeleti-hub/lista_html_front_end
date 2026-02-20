//15. Perímetro de Retângulo: Armazene largura e altura de um retângulo e calcule o
//perímetro.

const largura = prompt("Insira a largura do retângulo em cm:")
if(!/^\d+\d{0}$/.test(largura)){
    alert("Largura inválida! Não utilize vírgula e nem casas decimais.");
    throw new Error("Largura inválida");
}

const altura = prompt("Insira a altura do retângulo em cm:")
if(!/^\d+\d{0}$/.test(altura)){
    alert("Altura inválida! Não utilize vírgula e nem casas decimais.");
    throw new Error("Altura inválida");
}

const perimetro = (largura*2)+(altura*2)

alert(`O perímetro do retângulo é ${perimetro}cm.`)