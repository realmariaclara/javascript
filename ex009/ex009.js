function BotaoVerificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value

    if (idade >= 18){
        document.getElementById("resultados").innerHTML = `Pode tirar`
}

    if (idade < 18 ){
        document.getElementById("resultados").innerHTML = `NÃO pode tirar`
    }

}