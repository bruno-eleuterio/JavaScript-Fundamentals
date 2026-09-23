// Estruturas de repetição for, while, do while
// for:
for (let contador = 0; contador < 4; contador ++){
    console.log(contador)
    console.log("Aumentando o contador.")
}
let pontuacao = 0
for(let i = 1; i <= 10 ; i++){  // i = faixa incial de pontuação, pontuação máxima definida = 10, i++ para incrementar a pontuação de 1 em 1
    pontuacao += 1
    console.log (`Sua pontuação é de ${i}.`)
}
console.log (`${pontuacao} é a Pontuação Total.`)
// while:
let contador1 = 0
while (contador1 < 3){
    console.log("Olá!")
    contador1 ++
}
// do while
let contador2 = 0
do { 
    console.log("Bem-vindo!")
    contador2 ++
} while (contador2 < 3)