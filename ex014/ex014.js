function BotaoMegaSena() {

    
    document.getElementById("resultados").innerHTML = ``
    for (let i = 0; i < 6; i++) {
        var megasena = parseInt(Math.random() * 60)
        document.getElementById("resultados").innerHTML += ` ${megasena} `
    }
}