let numero = "1"
console.log(numero == "1")
numero = "1"
console.log(numero == 1)
numero = "1"
console.log(numero === 1)
numero = "1"
console.log(numero === "1")

// = É utilizado para uma atribuição
// == É utilizado para comparar o valor.
// == É utilizado para comparar o valor e o formato do conteúdo.

let marca = "Apple"
console.log(marca==="Apple")
marca = "Apple"
console.log(marca!=="Apple")
marca = "Apple"
console.log(marca!=="Samsung")

// !== É utilizado para verificar se o valor e conteúdo é diferente de outro.

marca = "Apple"
let resultado = marca !=="Samsung"
console.log(resultado) // A variável resultado será do tipo booleana.

marca = "Apple"
resultado = marca ==="Samsung"
console.log(resultado) // Guardar o valor em uma variável de resultado, resultando em True ou False.

let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado
console.log(`O CPF está na lista de bloqueados? ${ehCPFBloqueado}.`)

let CPFPermitido = "222.555.333-01"
let CPFUsuario = "222.555.333-02"
let ehBloqueado = CPFUsuario !== CPFPermitido
console.log(`É um usuário bloqueado? ${ehBloqueado}.`)

let texto = "felipe"
console.log(texto === "Felipe")