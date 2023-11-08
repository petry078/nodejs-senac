import validator from 'validator'

let nome: string = "Pedro"
let idade: number = 18

console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(validator.isEmail('test@gmail.com'))