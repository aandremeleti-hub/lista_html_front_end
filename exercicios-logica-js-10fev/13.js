// Calculadora de IMC: Receba peso e altura. Calcule o IMC (Peso / Altura2). Se o
// IMC for maior que 25, exiba "Acima do peso".

const pesoInput = prompt("Insira o peso em kg:")
if (!/^\d+,\d{1}$/.test(pesoInput)) {
    alert("Peso Inválido! Use vírgula e apenas uma casa decimal. Ex: 80,5")
    throw new Error("Peso inválido")
}

const alturaInput = prompt("Insira a altura em m:")
if (!/^\d+,\d{2}$/.test(alturaInput)) {
    alert("Peso Inválido! Use vírgula e 2 casas decimais. Ex: 1,75")
    throw new Error("Peso inválido")
}

const peso = Number(pesoInput.trim().replace(",","."));
const altura = Number(alturaInput.trim().replace(",","."));

const imc = peso / (altura*altura);

if(imc > 25){
    alert("Acima do peso!")
} else {
    alert("Não está acima do peso.")
}