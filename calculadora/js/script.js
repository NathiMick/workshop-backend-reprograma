// toFixed(2) Para mostrar apenas duas casas decimais após a virgula.

console.log(`Olá reprograma`)

var salario = document.querySelector('input#ganho-mes');
var horasDia = document.querySelector('input#horas-dia');
var resposta = document.querySelector('span#resposta');

function calcularValorHora() {
    var horasTotal = horasDia.valueAsNumber * 22;
    var resultado = salario.valueAsNumber / horasTotal;
    resposta.innerHTML = `${resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
}