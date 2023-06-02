
    /*Cometário em 
      multiplas linhas
      */
// {} - bloco de comando
     //O alert é utilizado para exibir uma mensagem em popup
    //alert("Olá Mundo!!!")
    
    //No console conseguimos visualizar informações sem exibir na página
    console.log("Olá Mundo, estou utilizando o console")

    //Tipos de exibição de mensagem no console
    console.error("Está é a mensagem de erro")
    console.warn("Está é a mensagem de alerta")
    console.info("Está é a mensagem de informação")

     /*Criando uma função quando clicamos no botão
       o nome da função tem que ser igual ao do eventro onclick
     */
    function Botao1(){
        alert("Você clicou no botão")
    }

    function BotaoCorFundo(){
        /*Alternando no documento html no elemento
         body o estilo fundo 
         */
        document.body.style.backgroundColor = "blue"
    }

    function BotaoNome(){
        //No prompt abre a opção para digitar algo
       var nome2 = prompt("Qual é o seu nome?")
       confirm("Olá " + nome2 + ", entendeu a variável? ")
       //confirm (`Olá ${nome2}, entendeu variável?)`
    }

    //Declarando variáveis 
    //String - Conjunto de caracteres - Declarar com "" ou ''
    var nome = "Maria Clara"
    var sobrenome = "Real"
    //Number - Todo número em JS é do tipo Number 
    //- Declarar sem ""
    var idade = 16
    //Boolean - Somente recebe true e false 
    var aprovado = true 


    //Utilizar o typeof para saber o tipo do dado
    console.log (typeof nome)
    //Juntar strings com o +
    console.log (nome + ' ' + sobrenome)

    var n1 = 10
    var n2 = 15
    //Irá somar as 2 variáveis number (25)
    console.log (n1 + n2)
    var n3 = "10"
    var n4 = "15"
    //Irá juntar as 2 variáveis (1015)
    console.log(n3 + n4)
    //Se utilizarmos o + com string ele junta 
    //Se utilizar com number soma

    //Uma variável pode receber o valor de outra variável 
    n1 = n2 
    console.log("n1 = " + n1 + ' e o n2 = ' + n2)

    //Para atribuir um valor decimal utilizar . não , 
    var salario = 1290.85
    //Posso também somar a variável com ela mesmo 
    salario = salario + 200
    console.log(salario)

    //Antigamente para juntar texto e variáveis faziamos assim
    console.log('Olá, ' + nome + 'você tem ' + idade + ' anos')
    //Hoje utilizamos o TemplateString forma mais simples
    console.log(`Olá, ${nome} voce tem ${idade} anos`)

    function BotaoSomar(){
        //Receber valor1 de um prompt
        var nr1 = prompt("Digite um número:")
        //Receber valor2 de um prompt
        var nr2 = prompt("Digite outro número:")

        //Convertendo a variável valor1 e 2 de string para Number
        nr1 = parseFloat(nr1) //Podemos utilizar o parseInt()
        //Convertendo a variável nr1 de string para Number
        nr2 = Number(nr2)//Podemos utilizar o Number()

        console.log(typeof nr1)//Verificando o tipo do dado
        //variavél soma Receber valor1 + valor2
        var soma = nr1 + nr2 
        //Exibir em um alert o valor da soma 
        //alert(soma)

        /*Alternando um elemento buscando ele pelo ID e alternando
          o conteúdo do HTML, podemos ler da seguinte forma 
          no documento pegar o elemento pelo ID res-soma e 
          alternar o conteúdo do HTML pela string*/
        document.getElementById("res-soma").innerHTML += 
        ` <br>A soma de ${nr1} + ${nr2} = ${soma}`
         }

         function Botaocidade(){
            var cidade = document.getElementById("cidade").value
            document.getElementById("resultadocidade").innerHTML +=
            `<br> O nome da cidade é ${cidade}`
         }

  //Operadores Aritméticos e Ordem de precedência 
  var opSoma = 5 + 2 //Operador de Soma +
  console.log(opSoma)//7

  var opSubtracao = 5 - 2 //Operador de subtração -
  console.log(opSubtração)//3

  var opMultiplicacao = 5 * 2 //Operador de multiplicação *
  console.log(opMultiplicacao) //10

  var opDivisao = 5 / 2 //Operador de divisão /
  console.log(opDivisao) //2.5

  var opExponenciacao = 5 ** 2 //Operador de exponenciação **
  console.log(opExponenciacao) = 25

  var opResto = 5 % 2 //Operador de resto da divisão %
  console.log(opResto)//1

  //Ordem de precedência 
  var ordemPrecedencia1 = 5 + 3 / 2
  console.log(ordemPrecedencia1)//6.5

  var ordemPrecedencia2 = (5 + 3) / 2 
  console.log(ordemPrecedencia2) // 4

  /* 1º()
     2º **
     3º * / 
     4º %
     5º + - 
  */

// Contantes - o valor não pode ser alterado depois de atribuído
const pi = 3.14
// pi = 3 - Se o valor for alterado derá erro no javascript

//Auto atribuição 
var n = 3
n = n + 3 // a variável recebe ela mesmo + 3
n += 3 // quer dizer o mesmo que a expressão acima

n++ //quando precisamos somar +1 ao valor da variável
n--//quando precisamos subtrair -1 ao valor da variável

//Operadores Relacionais
var n1 = 5
var n2 = 6
console.log(n1 > n2)// > Maior que 
console.log(n1 < n2)// < Menor que
console.log(n1 >= n2)// >= Maior ou igual que
console.log(n1 <= n2)// <= Menor ou igual que 
console.log(n1 == n2)// == Igual
console.log(n1 != n2)// != Não igual - Diferente

//operador lógico = verdadeiro ou falso

//Estruturas condicionais 
if(n1 > n2){ //Verificando a condição entre parenteses
     //Se a condição for verdadeira "entra" nesse bloco
  console.log("O n1 é maior que o n2")
} else {
  //Se a condição NÃO for verdadeira "entra" nesse bloco ELSE
  console.log("O n1 não é maior que o n2")
}

//Exemplo de condição 
var minhaIdade = 18

if(minhaIdade >= 16){
  console.log("Você pode votar")
} else {
  console.log("Você não pode voltar")
}

if (interruptor1 == "acesso" && interruptor2 == "acesso"){
}

/*idade >= 15 && idade <=17
estado = 'RJ'|| estado == 'SP'
salário > 1500 && sexo != 'M'
      */

//Operadores lógicos 
//&& representa o E
 var login = "adm"
 var senha = "123"
 //Para entrar na condição TRUE as 2 condições precisa ser verdadeiras
 if(login == "adm" && senha == "123"){
  //Executa esse bloco quando as condições são TRUE
 } else {
  //Executa esse bloco se pelo menos 1 condição for FALSE
 }

 var media = 6
 //Operador OU -> || (pipe)
 //Para entrar na condição TRUE pelo menos 1 condição precisa ser verdadeira
 if (media == 6 || media == 5){
  //Executa esse bloco quando uma condição é TRUE pelo menos 
 } else {
  //Aqui entra se todas as condições forem falsas 
 }

 //EstruturaS condicionais encadeadas
 if (media >= 7){
  console.log("APROVADO")
 } else if (media >= 5) { // Podemos fazer um novo if junto com o else
  console.log("RECUPERAÇÃO")
 } else{
  console.log("REPROVADO")
 }

 if(media == 10){
  console.log("Otimo aluno")
 }else if (media == 9 || media == 8){
  console.log("Bom aluno")
 } else if (media == 7 || media == 6){
  console.log("aluno mediano")
 }else if (media == 5 || media == 4 || media == 3){
  console.log("aluno abaixo da média")
 }else{
  console.log("aluno ruim")
 }

 //debbugger
 //Podemos utilizar o debbugger para analisar o código linha a linha 
 //return
 //quando queremos parar de executar uma função do JS utilizamos o return

//Para sortearmos um valor aleatório utilizarmos um o Math.random()
//O math.random retorna um número decimal e precisamos multiplicar pelo nr
//máximo que desejamos
//o parseInt utilizamos para obter apenas a parte inteira do número
var nrSorteado = parseInt(Math.random() * 100)
console.log(nrSorteado)

//Switch Case 
// É como se fosse vários if else de forma mais simples
var diaSemana = 3
switch(diaSemana){
  case 1 : 
    console.log("Hoje é: Domingo")
     break //para o switch case e não verifica as outras opções
  case 2 :
    console.log("Hoje é: Segunda")
      break
  case 3 :
    console.log("Hoje é: Terça")
     break 
  case 4 :
    console.log("Hoje é: Quarta")
      break
  case 5 : 
    console.log("Hoje é: Quinta")
      break
  case 6 :
    console.log("Hoje é: Sexta")
      break
  case 7 :
    console.log("Hoje é: Sábado")
      break

default:
  console.log("Dia invalido")
}

//For - laço de repetição 
//1º Expressão var i = 0 
//(Aqui eu inicio o controle de vezes)
//2º Expressão i <= 10
//(Aqui nos verificamos a condição para se manter no loop)
//3º Expressão i++
//(Aqui acrescentamos na variável +1 vez) 
for (var i = 1; i <= 10; i++){
alert(i)
}
//Verificando se número é par com while 
var contador = 1 //Iniciando o contador de vezes que irá executar
while(contador <= 10){//Enquanto a condição for verdadeira
  if(contador % 2 == 0){//Condição para o contador for par 
    console.log(`${contador} é par`)
  } else {
    console.log(`${contador} é ímpar`)
  }
  contador++ //Adicionamos +1 ao contador para não ficar em loop infinito
}