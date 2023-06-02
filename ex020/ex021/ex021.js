var filmes = []
function BotaoVetor(){
    document.getElementById('resultados').innerHTML = ''
    var nomes = document.getElementById('filme').value
    filmes.push (nomes)
    document.getElementById('resultados').innerHTML = ``
    for (var i = 0; i < filmes.length; i++) {
        document.getElementById('resultados').innerHTML += `<b>${filmes[i]}</b><br> `
    }
}
