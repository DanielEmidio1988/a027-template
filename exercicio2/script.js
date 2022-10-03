const valordoInput = document.getElementById("nome")
console.log(valordoInput.value)
valordoInput.innerHTML = "testando"
valordoInput.value = ""

const valorEndereco = document.getElementById("endereco")
console.log(valorEndereco.value)
valorEndereco.value = ""

//Segunda forma de fazer, funciona
console.log(document.getElementById("endereco").value)
document.getElementById("endereco").value = ""

const valorEmail = document.getElementById("email")
console.log(valorEmail.value)
valorEmail.value = ""