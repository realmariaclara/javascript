var imagens= []

function botaoFilmes() {
    var nome = document.getElementById("nome").value
    filmes.push(nome)
    var filmes = document.getElementById("nome").value
    filmes.push(filmes)
    var foto = document.getElementById("imagem").value
    imagens.push(foto)
    document.getElementById('resultado').innerHTML = ''

    for (var i = 0; i < filmes.length ; i++) {
    for (var i in filmes) {
    //for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `<div><img src='${imagens[i]}' class='img'> <p>${filmes[i]}<p><div>`
    }
    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}
}
