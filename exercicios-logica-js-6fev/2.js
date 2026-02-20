// 2. Conversor de Temperatura: Declare uma variável com a temperatura em Celsius e
// converta para Fahrenheit usando a fórmula (C * 9/5) + 32.

const celsiusInput = prompt("Insira a temperatura:")

if (!/^\d+,\d{1}$/.test(celsiusInput)){
    alert("Temperatura inválida! Use vírgula e uma casa decimal depois da vírgula")
    throw new Error("Tempertaura inválida!")
}

const celsius = Number(celsiusInput.trim().replace(",","."))

let fahrenheit = (celsius*(9/5)+32)

console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1).replace(".",",")}`)

alert(`A temperatura em Fahrenheit é ${fahrenheit.toFixed(1).replace(".",",")}`)