function BotaoImpares(){
    var contador1 = Number(document.getElementById("nr1").value)
    var contador2 = Number(document.getElementById("nr2").value)


document.getElementById("resultados").innerHTML = `Relação de N° ímpares de ${contador1} até ${contador2} <br>`
    
    for (var i = contador1; i <= contador2; i++){
        if (i % 2 == 1 ){
            document.getElementById("resultados").innerHTML += `${i} <br>`
        }
    }
}