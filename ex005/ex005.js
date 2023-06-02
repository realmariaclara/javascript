function Botaocalcular(){
    var nr = document.getElementById("numero").value
    var dobro = nr * 2
    var metade = nr / 2
    document.getElementById("resultados").innerHTML += 
        `O dobro do número ${nr} é igual a ${dobro} e a metade é igual a ${metade} <br>`
}

function Botaolimpar(){
    var nr = document.getElementById ("resultados").innerHTML = ""
    document.getElementById("numero").value = ""
}


