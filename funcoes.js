//Declarando uma função sem parametro e sem retorno
function exibirInformacao(){
    console.log('Executei a função exibir info')
}

//Chamando a minha função
exibirInformacao()
exibirInformacao()
exibirInformacao()

//Função com entrada de parâmetro e sem retorno (sem saída de dados)
//Criando a função geral para gerar no console a tabuada do nr desejado
function ricardoCalculeTabuada(nr){
    for (var i = 0; i<= 20; i++){
        console.log(`${nr} x ${i} = ${nr * i }`)
    }
}

//Chamando a função e passando o nº com PARAMETRO que desejo ver a tabuada
ricardoCalculeTabuada(428)
ricardoCalculeTabuada(30)
ricardoCalculeTabuada(45643)

//Declarando a função recebendo o parâmetro e retornando um valor
function ricardoCalculeDobro(nr){
    let dobro = nr * 2
    return dobro // com o comando return "devolve" o valor calculado para a função
}

//Chamando função para calcular o dobro e receber o resultado na váriavel 
var resultado = ricardoCalculeDobro(7)
console.log(resultado)
var resultado = ricardoCalculeDobro(45151)
console.log(resultado)

//Calcular média enviando 2 parâmetros
function calcularMedia(nota1, nota2){
    var soma = nota1 + nota2
    var media = soma / 2
    return media
}

var aluno1 = calcularMedia(7,8)
console.log(aluno1)
var aluno2 = calcularMedia(5,6)
console.log(aluno2)

var user = "adm"
var senha = 123
var possoAcessar = validarlogin(user, senha)

if(possoAcessar == true){
    console.log("Você pode acessar o sistema")
} else {
    console.log("Você não tem permissão")
}

validarLogin(user, senha)
{
    //Valida se os vbalores são vazios
    if(login == '' || senha == "" )
    {
        return false
    }
    //Valida se o login e senha são iguais 
    if (login == "adm" && senha == 123)
    {
        return true 
    }
}