function BotaoTabuada() {
    var tabuada = document.getElementById("numero").value
    document.getElementById("resultados").innerHTML = `Tabuada do ${tabuada} <br>`
    for(var multiplicador = 1; multiplicador <=10; multiplicador++){
        var resultado = multiplicador * tabuada
        document.getElementById("resultados").innerHTML += `<br> ${tabuada} x ${multiplicador} = ${resultado}`
    }      
}