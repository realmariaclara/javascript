function BotaoImagem(){
    var img = document.getElementById("imagem").value
    var ini = 0

    ini = Number (ini)
    img = Number (img)
    while(ini < img){
        document.getElementById("resultados").innerHTML += `<img src="coracao.png" width="100px" height="100px">`
        ini++
    }
}