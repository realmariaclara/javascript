function BotaoMes(){
    var nome = document.getElementById("nome").value
    var mesSorteado = parseInt(Math.random() * 13)
    switch(mesSorteado){
    case 1 :
            document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Janeiro `
                break
     case 2 :
            document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Fevereiro`
                break
    case 3 :
            document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Março`
                break
    case 4 :
             document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Abril`
                break
    case 5 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Maio`
                break
    case 6 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Junho`
                break
    case 7 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Julho`
                break
    case 8 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Agosto`
                break
    case 9 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Setembro`
                break
    case 10 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Outubro`
                break
    case 11 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Novembro`
                break
    case 12 :
        document.getElementById("resultados").innerHTML = `${nome}, você vai casar no mês de Dezembro`
                break
    default :
        document.getElementById("resultados").innerHTML = `${nome}, você não vai se casar`
                break
    }
    }
