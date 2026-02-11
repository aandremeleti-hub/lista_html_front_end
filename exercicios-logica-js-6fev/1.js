const pesoInput = prompt("Insira seu peso:")
if (!/^\d+,\d{1}$/.test(pesoInput)) {
    alert("Peso Inválido! Use vírgula e apenas uma casa decimal. Ex: 80,5")
    throw new Error("Peso inválido")
}

const alturaInput = prompt("Insira sua altura (use vírgula 2 casas decimais):")

let imc = pesoImput / (alturaImput * alturaImput)

console.log(`O seu IMC é ${imc}`)
alert(`O seu IMC é ${imc}`)