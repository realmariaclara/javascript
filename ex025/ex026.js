function Cadastrar() {
    location.href = "ex025.html"
}

function BotaoEntrar() {
    var usuario = document.getElementById('loginEntrar').value
    var senha = document.getElementById('senhaEntrar').value

    var encontrou = false
    listaUsuario.forEach(item => {
        if (usuario == item.login && senha == item.senha) {
            alert(`Bem vindo ao sistema, ${item.nome}`)
            encontrou = true
        }
    })
        if (encontrou == false ){
            alert('usuario não encontrado')
        }
        
    var listaUsuario = []

    listaUsuario = JSON.parse(localStorage.getItem('bdUsuario'))
    if (listaUsuario == null) {
        listaUsuario = []
    }
}