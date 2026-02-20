const pesoInput = prompt("Insira seu peso:")
if (!/^\d+,\d{1}$/.test(pesoInput)) {
    alert("Peso Inválido! Use vírgula e apenas uma casa decimal. Ex: 80,5")
    throw new Error("Peso inválido")
}

const alturaInput = prompt("Insira sua altura (use vírgula 2 casas decimais, ex: 1,75):")

if (!/^\d+,\d{2}$/.test(alturaInput)){
    alert("Altura inválida! Use vírgula e duas casas decimais. Ex: 1,75")
    throw new Error ("Altura inválida")
}

const peso = Number(pesoInput.trim().replace(",","."))

const altura = Number(alturaInput.trim().replace(",", "."))

let imc = peso / (altura * altura)

console.log(`O seu IMC é ${imc.toFixed(2).replace(".",",")}`)

alert(`O seu IMC é ${imc.toFixed(2).replace(".",",")}`)