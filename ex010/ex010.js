    function BotaoLogin(){
        var usuario = document.getElementById("usuario").value
        var senha = document.getElementById("senha").value

        if(usuario == "adm" && senha == "123"){
            document.getElementById("resultados").innerHTML = `<strong class = "verde" Seja bem vindo ${usuario}, 
            Você validou e entrou no sistema </strong>`
        } else {
            document.getElementById("resultados").innerHTML = `<strong class = "vermelho">Usuário ou senha invalido </strong>`
        }



    }