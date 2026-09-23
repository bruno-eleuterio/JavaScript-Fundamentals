let animais = ["Tubarão", "Águia", "Tartaruga"]
let fauna = [
    ["Tubarão", "M", "Aquático"],
    ["Águia", "F", "Terrestre"],
    ["Tartaruga", "M", "Híbrido"]
]

console.log(fauna[0])
console.log(fauna[0][2])
console.log(`O animal monitorado é um ${fauna[0][0]}, do sexo ${fauna[0][1]} e é um animal ${fauna[0][2]}.`)
console.log(`O conjunto de animais monitorados é composto por um ${fauna[0][0]}, do sexo ${fauna[0][1]} e de habitat ${fauna[0][2]}, 
    uma ${fauna[1][0]}, do sexo ${fauna[1][1]} e de habitat ${fauna[1][2]} e por uma ${fauna[2][0]}, do sexo ${fauna[2][1]} e habitat ${fauna[2][2]}.`)
    