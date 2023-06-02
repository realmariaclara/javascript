var listaFilmes = []

/*Buscando as informações do localStorage gravadas no navegador
  utilizamos o método getItem com o nome exatamente igual ao que 
  utilizamos no setItem
*/
  listaFilmes = JSON.parse(localStorage.getItem('bdFilmes'))
if(listaFilmes == null){
    listaFilmes = []
}

exibirFilmes()

//Exibindo no console a lista de filmes que carregou no vetor
console.log(listaFilmes)
    
function exibirFilmes(){
    document.getElementById('resultados').innerHTML = ''

    for (var i in listaFilmes){
        document.getElementById('resultados').innerHTML += 
        `<div> 
        <p>${listaFilmes[i].nome}</p>
        <img src= "${listaFilmes[i].link}">
        </div>`
    }
}


function validarCadastro(nomeFilme, imagemFilme){
    if (nomeFilme != '' && imagemFilme != ''){
        return true
    } else {
        return false 
    }
}

function BotaoVetor(){
    let nomeFilme = document.getElementById('nome').value
    let imagemFilme = document.getElementById('imagem').value

    var possoCadastrar = validarCadastro(nomeFilme, imagemFilme)
    if(possoCadastrar == false){
        alert('Verifique os dados antes de cadastrar')
        return
    }

    var filme = {
        nome: nomeFilme,
        link: imagemFilme
    }

    listaFilmes.push(filme)
    /*Utilizando o localStorage que irá gravar o nosso vetor de filmes
     no método SetItem, preciso passar como parâmetro o nome do espaço
     que o navegador irá reservar e passo também o vetor de filmes
     convertido em formato JSON
    */
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))

    exibirFilmes()

    document.getElementById('nome').value = ""
    document.getElementById('imagem').value = ""
    document.getElementById('nome').focus()
}

function BotaoIndicar(){
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML = 
    `<div>
      <img scr = '${listaFilmes[nrSorteado].link} class = 'img'>
      <p>${listaFilmes[nrSorteado].nome}</p>
    </div>`
}

function BotaoLimpar(){
    listaFilmes = []
    localStorage.setItem( 'bdFilmes', JSON.stringify(listaFilmes))
    exibirFilmes()
}