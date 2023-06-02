function BotaoVerificar(){
    var nome = document.getElementById("nome").value
    var idade = document.getElementById("idade").value


if(idade >=16 && idade < 18 || idade > 70){
    document.getElementById("resultados").innerHTML = `${nome}, você não é obrigado a votar`
} else if (idade >=18 && idade < 70){
    document.getElementById("resultados").innerHTML = `${nome}, você é obrigado a votar`
} else {
    document.getElementById("resultados").innerHTML = `${nome}, você não pode votar`
}
}



