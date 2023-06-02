    function BotaoMedia(){
        var nome1 = document.getElementById("nome").value
        var opnota = document.getElementById("nota1").value
        var note = document.getElementById("nota2").value

        var opnota = Number(opnota)
        var note = Number(note)

        if (opnota > 10){
            alert("Nota 1 não pode ser maior que 10")
            return
        }
        if (note > 10){
            alert("Nota 2 não pode ser maior que 10")
            return
        }

        var media = (opnota + note) / 2 
        document.getElementById("resultados").innerHTML += `O aluno(a) ${nome1} tirou nota ${opnota} e ${note} sua média foi 
            ${media} <br>`

        var minhaNota = media 
        if(minhaNota >= 7){
            document.getElementById("resultados").innerHTML += `APROVADO`
        }else{
            document.getElementById("resultados").innerHTML += `REPROVADO`
        }
    }