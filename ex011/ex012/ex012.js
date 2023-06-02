var nrSorteado = parseInt(Math.random() * 100)
alert(nrSorteado)

var tentativas = 0

function BotaoSortear(){
    var chute = prompt("Qual o número sorteado?")

    tentativas ++

    if (nrSorteado == chute){
    document.getElementById("resultados").innerHTML += `<br>Parabéns você acertou no Nº ${nrSorteado} EM ${tentativas} tentativas`
    } else if (nrSorteado < chute){
        document.getElementById("resultados").innerHTML += `<br>Você chutou ${chute} pensei em um número MENOR` 
    } else if (nrSorteado > chute){
        document.getElementById("resultados").innerHTML += `<br>Você chutou ${chute} pensei em um número MAIOR` 
    }    
}

function BotaoLimpar(){
    document.getElementById("resultados").innerHTML = ``
    var nrSorteado = parseInt(Math.random() * 100)
alert(nrSorteado)
tentativas = 0 
}