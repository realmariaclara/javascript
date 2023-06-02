//Criando um array vazio 
let meuVetor = []

//Criando vetores com dados
var numeros = [4,1,8,5,2,7]
var nomes = ['Silvia', 'Marcos', 'Sandra']
var novoVetor = [20, 'Sesi', true]

//Acessando os dados de um vetor
console.log ( nomes [1] ) //'Sandra'
console.log (novoVetor [2] ) //'sesi'

//Verificando o atributo de tamanho do vetor 
console.log (nomes.length) //6

// indice         0        1        2        3        4
var frutas = [ 'Maçã', 'Laranja', 'Pera','Morango', 'Uva']
//faço um for para percorrer todo o tamanho do vetor
for (var i = 0; i < frutas.length; i++ ){
    //coloco o i no indice da fruta para selecionar
    //valor de cada indice do vetor
    console.log (frutas [i])
}

//Para ler todos os elementos de um vetor, podemos também
//Utilizar o --for in-- como o exemplo abaixo
for (var pos in frutas){
    console.log ( frutas [pos] )
}

//Adicionamos novo valor no FINAL do vetor - push
frutas.push('Abacaxi')
for (var i = 0; i < frutas.length; i++ ){
    console.log (frutas [i])
}

/*O método forEach - significa para cada item do vetor
  dentro do parenteses colocamos a variável que irá
  receber o conteúdo de cada linha do vetor 
  e com o => {} informamos bloco que irá executar para 
  cada linha 
*/
frutas.forEach(item => {
    console.log('Item pelo forEach', item)
})

/*Quando precisamos do índice também o colocamos entre 
  assim como no exemplo abaixo  */ 
frutas.forEach((item, indice) => {
    console.log('Item pelo forEach', indice, item)
})

var novaListaFrutas = []
novaListaFrutas.push('Limão')
novaListaFrutas.push('Melancia')
console.log(novaListaFrutas)

//Modificando o valor de um indice do vetor 
novaListaFrutas[0] = ('Melão')
console.log(novaListaFrutas)

//for in -> não precisa inicializar uma variável de contador do loop
for (var pos in novaListaFrutas){
    console.log('novaListaFrutas['+ pos + '] ' + novaListaFrutas [pos])
}

