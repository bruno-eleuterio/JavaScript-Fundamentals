// Estruturas condicionais if, else if e else  
    
let ligado = false
if(ligado){
    console.log("Executou o comando.")
}
if(1 === 1){
    console.log("Executou o comando.")
}
ligado = true
if(ligado){
    console.log("Afirmativo.")
}
let credencial = false
let entrada = ""
if(credencial){
    entrada = "Permitida."
} else{
    entrada = "Bloqueada."
}
console.log(`Entrada: ${entrada}`)
credencial = true
entrada = ""
if(credencial){
    entrada = "Permitida."
} else{
    entrada = "Bloqueada."
}
console.log(`Entrada: ${entrada}`)
let ingresso = "pista"
if (ingresso === "pista"){
    console.log("Dirija-se para a pista central.")
}else if(ingresso = "arquibancada"){
    console.log("Dirija-se para as arquibancadas através das escadas laterais.")
}else{
    console.log("Dirija-se para a área vip através da passarela ao lado da pista central.")
}
ingresso = "vip"
if (ingresso === "pista"){
    console.log("Dirija-se para a pista central.")
}else if(ingresso === "arquibancada"){
    console.log("Dirija-se para as arquibancadas através das escadas laterais.")
}else{
    console.log("Dirija-se para a área vip através da passarela ao lado da pista central.")
}