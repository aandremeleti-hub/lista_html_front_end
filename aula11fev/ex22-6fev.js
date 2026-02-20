const lado1 = Number(prompt('Informe a medida do lado 1:')) // Solicita lado 1 e converte para número

const lado2 = Number(prompt('Informe a medida do lado 2:')) // Solicita lado 2

const lado3 = Number(prompt('Informe a medida do lado 3:')) // Solicita lado 3

switch (true) { // O switch agora compara expressões que resultam em true ou false

    case (lado1 <= 0 || lado2 <= 0 || lado3 <= 0): // Verifica se algum lado é inválido
        alert('Todos os lados devem ser maiores que zero') // Mostra erro
        break; // Encerra o switch

    case (lado1 === lado2 && lado2 === lado3): // Verifica se todos os lados são iguais
        alert('Triângulo equilátero'); // Mostra resultado
        break; // Encerra o switch

    case (lado1 === lado2 || lado1 === lado3 || lado2 === lado3): // Verifica se dois lados são iguais
        alert('Triângulo isósceles'); // Mostra resultado
        break; // Encerra o switch

    default: // Se nenhuma condição anterior for verdadeira
        alert('Triângulo escaleno'); // Mostra resultado
}
