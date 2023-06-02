var listaCarros = []

//Declando um objeto e informando os atributos 
//Todo objeto declaro com { }
let carro = {
    ano: "2020", 
    modelo: "Gol",
    marca: "VW"
}

//Para exibir o atrubuto do objeto faço da seguinte forma 
//objeto.atributo
console.log(carro)
console.log(carro.ano)
console.log(carro.ano + ' - ' + carro.modelo)
console.log(`${carro.ano} + ' - ' + ${carro.modelo}`)

//adicionando o objeto carro ao vetor
listaCarros.push(carro)

console.log(listaCarros.length) //Tamanho - só existe um item

//Novo Objeto
carro = {
    ano: "2022", 
    modelo: "Onix",
    marca: "GM"
}

//Adicionando novo objeto carro ao vetor listaCarro
listaCarros.push(carro)
console.log(listaCarros.length)

//Exibindo uma lista apenas como o modelo do carro 
for (var pos in listaCarros){
    //Acessando o indice do vetor e o atributo modelo
    console.log(listaCarros[pos].modelo)
}
