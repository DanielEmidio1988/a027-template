const leiaParagrafo = document.getElementById("paragrafo")

console.log(leiaParagrafo.innerHTML)

let numero = 0

function contaClique(){
    let textodoInput = document.getElementById("texto")
    console.log(textodoInput.value)

}

function cliqueSubs(){
    const novoTexto = document.getElementById("texto")
    leiaParagrafo.innerHTML= novoTexto.value
}