function BotaoVetor(){
    var filmes = [' Esposa de Mentirinha', 'Mistério no Mediterrâneo', ' Sócrates', 'O Poço', ' Crepúsculo']
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById("resultados").innerHTML += `Posição do vetor ${i} - Filme ${filmes[i]} <br> `
    }
}
