function BotaoMedia(){
    var nome1 = document.getElementById("nome").value
    var opnota = document.getElementById("nota1").value
    var note = document.getElementById("nota2").value
    
    var valida = validarNota(opnota, note)
    if(valida == false)
    {
        return
    }
    var media = calcularMedia(opnota, note)

    exibirAprovacao(media)
}

function validarNota()
    if (opnota > 10){
        alert("Nota 1 não pode ser maior que 10")
    return false
}
    if (note > 10){
     alert("Nota 2 não pode ser maior que 10")
    return false 
}

function calcularMedia(opnota, note){
    var media = (Number(opnota)+ Number(note)) / 2
    return media 
}

function exibirAprovacao(media){
    if(minhaNota >= 7){
        document.getElementById("resultados").innerHTML += `APROVADO`
    }else{
        document.getElementById("resultados").innerHTML += `REPROVADO`
    }
}