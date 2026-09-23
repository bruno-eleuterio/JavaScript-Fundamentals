// AND (&&), OR (||), NOT (!)
// AND (&&)
let idade = 18 // Tipo Number
let vistoVerificado = true // Tipo booleana
console.log((idade >= 18) && (vistoVerificado === true))
idade = 17
vistoVerificado = true 
let resultado = ((idade >= 18) && (vistoVerificado === true))
console.log(resultado)
idade = 18
vistoVerificado = false 
resultado = ((idade >= 18) && (vistoVerificado === true))
console.log(resultado)
let moedasColetas = 100 // 100 moedas coletas e um item estrela para ser True.
let item = "estrela"
let resultado2 = (moedasColetas >= 100) && (item === "estrela")
console.log(resultado2)
moedasColetas = 99
item = "estrela"
resultado2 = (moedasColetas >= 100) && (item === "estrela")
console.log(resultado2)
// OR (||) - A pessoa só irá sair se estiver sem chuva ou se ela possuir um guarda-chuva.
let tempo = "ensolarado"
let item2 = "guada-chuva"
let sair = (tempo !== "chuva") || (item2 === "guarda-chuva")
console.log(`A pessoa pode sair? ${sair}.`)
tempo = "chuva"
item2 = "nenhum"
sair = (tempo !== "chuva") || (item2 === "guarda-chuva")
console.log(`A pessoa pode sair? ${sair}.`)
// NOT (!) - Nega uma afrimação.
let tempo1 = "chuva"
let resultado3 = tempo === "chuva"
console.log(!resultado3)
tempo1 = "chuva"
resultado3 = tempo === "chuva"
console.log(!!resultado3) // É possível mudar a polaridade de uma variável booleana utilizando o operador NOT duplicadamente.
tempo1 = "chuva"
let horario = 8
resultado3 = !((tempo !== "chuva") && (horario > 6)) // Apesar do resultado da expressão retornar True, utilizamos o operador lógico NOT para invertê-lo.
console.log(resultado3)