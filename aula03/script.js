const btnA = window.document.getElementById('btnA');
const btnY = window.document.getElementById('btnY')

btnA.addEventListener('click', function onclick(event) {
    document.body.style.backgroundColor = "blue"
    document.body.style.color = "white"
    document.body.style.fontSize = '50px'
});

btnY.addEventListener("click", function onclick(event) {
    document.body.style.backgroundColor = "yellow"
    document.body.style.color = "black"
    document.body.style.fontSize = '40px'
});




