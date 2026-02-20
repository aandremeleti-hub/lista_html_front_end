const paragrafo = document.getElementById("paragrafo_mx");
const h3_titulo = document.getElementById("titulo_h3");
const li_first = document.getElementById("first_to_do");
const li_text = document.getElementById("text-li");

paragrafo.innerText = "novo testo mudado pelo js"

function mudar_textto_titulo(){
    h3_titulo.innerHTML = 'Titulo mudado no click do botão.'
}

function sublinhar_texto(){
    li_first.style.setProperty('text-decoration', 'underline')
}

li_first.addEventListener('change', () => {
    if(li_first.checked){
        li_text.style.textDecoration = "underline";
    } else {
        li_text.style.color = "red"
    }
})