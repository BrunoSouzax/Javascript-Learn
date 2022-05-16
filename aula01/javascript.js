// window.alert("Caixa de alerta suspeita")
/*
var nome = window.prompt ("Qual é o seu nome? ")
window.alert (`É um grande prazer te conhecer ${nome}! `)

var todo = window.prompt (`Oque gostaria de fazer hoje ${nome}?`)

document.write(`Seu nome tem ${nome.length} letras. `)
*/

var corpo = window.document.body
var p1 = window.document.getElementsByTagName('p')[0]

var d = window.document.querySelector('div#msg')
d.style.color = 'blue'

var d = window.document.getElementById("msg")
d.style.background = "green"

corpo.style.background = "gray"
