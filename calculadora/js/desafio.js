var txtValorHoras = document.querySelector("input#valor-hora");

var txtHorasProjeto = document.querySelector ("input#horas-projeto");

var resposta = document.querySelector("span#resposta");

function calcular() {
    var valorHoras = txtValorHoras.valueAsNumber;
    var horasProjeto = txtHorasProjeto.valueAsNumber;
    var valorTotal = valorHoras * horasProjeto;
    resposta.innerHTML = `${valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`

}
