const jogos = ['jogo1','jogo2','jogo3' ]

function add_jogo(jogo_nome){
    jogos.push(jogo_nome)
    return jogo_nome
}

const novo_jogo = add_jogo('jogo4')