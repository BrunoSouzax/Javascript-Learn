const azul = window.document.getElementById('azul');
const vermelho = window.document.getElementById('vermelho');
const verde = window.document.getElementById('verde');

azul.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = 'blue'
    document.body.style.color = 'white'
    document.body.style.fontSize = '15px'
    document.body.style.textAlign = 'right'
    document.body.style.padding = '0px'
});

vermelho.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = 'red'
    document.body.style.color = 'black'
    document.body.style.fontSize = '15px'
    document.body.style.textAlign = 'center'
    document.body.style.padding = '50px'
})

verde.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = 'green'
    document.body.style.color = 'yellow'
    document.body.style.fontSize = '20px'
    document.body.style.textAlign = 'center'
    document.body.style.padding = '0px'
})