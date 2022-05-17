var a = window.document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseenter',entrar)
a.addEventListener('mouseout', sair)

function clicar(){
    a.innerText = 'clicou!'
    a.style.background = 'green'
    a.style.color = "yellow"
}

function entrar() {
    a.innerText = "Entrouuuuu"
    a.style.background = "yellow"
    
}

function sair() {
    a.innerText = "Bye Byeeee"
    a.style.background = "red"
    a.style.color = "white"
}