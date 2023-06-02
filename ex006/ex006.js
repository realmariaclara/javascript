function BotaoCalcular(){
    var nr1 = document.getElementById("numero1").value
    var nr2 = document.getElementById("numero2").value
    
    var nr1 = Number(nr1)
    var nr2 = Number(nr2)

    var soma = nr1 + nr2 
    document.getElementById("resultados").innerHTML += 
        `${nr1} + ${nr2} = ${soma} <br>`

    var subtrai = nr1 - nr2
    document.getElementById("resultados").innerHTML += 
    `${nr1} - ${nr2} = ${subtrai} <br>`

    var multiplica = nr1 * nr2
    document.getElementById("resultados").innerHTML += 
        `${nr1} * ${nr2} = ${multiplica} <br>`

    var dividi = nr1 / nr2 
    document.getElementById("resultados").innerHTML += 
        `${nr1} / ${nr2} = ${dividi} <br>`

    var sobra = nr1 % nr2 
    document.getElementById("resultados").innerHTML += 
        `${nr1} % ${nr2} = ${sobra} <br>`

    var expoente = nr1 ** nr2
    document.getElementById("resultados").innerHTML += 
    `${nr1} ** ${nr2} = ${expoente} <br>`
}

