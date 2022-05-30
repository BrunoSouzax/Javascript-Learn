// window.alert("Caixa de alerta suspeita")
/*
var nome = window.prompt ("Qual é o seu nome? ")
window.alert (`É um grande prazer te conhecer ${nome}! `)

var todo = window.prompt (`Oque gostaria de fazer hoje ${nome}?`)

document.write(`Seu nome tem ${nome.length} letras. `)
*/

const dark = window.document.getElementById("dark");
dark.addEventListener('click', function onclick(event){
    document.body.style.backgroundColor = 'black';
})

const white = window.document.getElementById('white');
white.addEventListener('click', function onclick(event){
    document.body.style.backgroundColor = 'white'
})

const green = window.document.getElementById('green');
green.addEventListener('click', function onclick(event){
    document.body.style.backgroundColor = 'green'
})
