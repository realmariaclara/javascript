var listaUsuario = []

  listaUsuario = JSON.parse(localStorage.getItem('bdUsuario'))
if(listaUsuario == null){
    listaUsuario = []
}

exibirUsuarios()
    
function exibirUsuarios(){
    document.getElementById('resultados').innerHTML = ''

    for (var i in listaUsuario){
        document.getElementById('resultados').innerHTML += 
        `<div> 
        <p>${listaUsuario[i].nome}</p>
        </div>`
    }
}

function Cadastrar(){
    let nome = document.getElementById('nome').value
    let login = document.getElementById('login').value
    var senha = document.getElementById('senha').value
    var confirmar = document.getElementById('confirmar').value

    var possoCadastrar = validarCadastro(nome, login, senha, confirmar)
    if(possoCadastrar == false){
        alert('Verifique se há espaços em brancos!!')
        return
    }

    var usuario = {
        nome: nome,
        usuario: login,
        senha: senha
    }

    listaUsuario.push(usuario)
    localStorage.setItem('bdUsuario', JSON.stringify(listaUsuario))

    exibirUsuarios()

    document.getElementById('nome').value = ""
    document.getElementById('login').value = ""
    document.getElementById('senha').value = ""
    document.getElementById('confirmar').value = ""
    document.getElementById('nome').focus()
}

function validarCadastro(nome, _login , senha, confirmar){
    if (nome != '' && senha != '' && confirmar != ''){
        return true
    } if (senha != confirmar){
        alert('As senhas não conferem')
        return true
    } else {
        return false
    }
}

function exibirUsuarios(){
    document.getElementById('resultados').innerHTML = ``

    listaUsuario.forEach( (item, indice) => {
        document.getElementById('resultados').innerHTML +=
        `<p> <b> Nome: </b> ${item.nome} - <b> Login: </b> ${item.login} </p>
        <img src= 'excluir.svg' class='excluir' onclick='excluirUsuario(${indice})'>`
    })
} 
function excluirUsuario(indice){
    listaUsuario.splice(indice, 1)
    localStorage.setItem('bdListaUsuario', JSON.stringify(listaUsuario))
    exibirUsuarios()
}