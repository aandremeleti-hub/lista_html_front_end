//19. Tempo de Viagem: Dada a distância e a velocidade média, calcule o tempo estimado
//de viagem.

const distancia = prompt("Insira a distância em km:");

const velocidadeMedia = prompt("Insira a velocidade média em km/h:");

const tempo = velocidadeMedia/distancia

alert(`O tempo estimado de viagem é ${tempo} horas.`)