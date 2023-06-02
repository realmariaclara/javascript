function BotaoÍmpares(){
    var mult = 1
    document.getElementById("resultados").innerHTML = `Relação de N° ímpares até 20 <br>`

    while(mult <= 20){
        if (mult % 2 == 1){ 
            document.getElementById("resultados").innerHTML += `${mult} <br>`
        }
        mult++
    }
}