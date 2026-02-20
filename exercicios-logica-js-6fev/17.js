//17. Cálculo de Combustível: Dada a distância percorrida e o consumo médio do carro,
//calcule quantos litros foram gastos.

const distanciaPercorrida = prompt("Insira a distância percorrida em km:")
if(!/^\d+\d{0}$/.test(distanciaPercorrida)){
    alert("Valor inválido! Não use vírgula e nem casas decimais.")
    throw new Error("Valor inválido")
}

const consumoMedio = prompt("Insira o consumo médio do carro em km/L:")
if(!/^\d+\d{0}$/.test(consumoMedio)){
    alert("Valor inválido! Não use vírgula e nem casas decimais.");
    throw new Error("Valor inválido");
}

//consumo = km percorridos / litros => litros = km percorridos / consumo

const litros = distanciaPercorrida/consumoMedio

alert(`A quantidade de litros gasta percorrendo ${distanciaPercorrida}km a um consumo médio de ${consumoMedio}km/l é ${litros}L.`)