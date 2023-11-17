import {Request, Response} from 'express'

export const home = ((req:Request, res:Response) => {
    let idade:number = 26
    let mostrarIdade:boolean = false

    if(idade > 18){
        mostrarIdade = true
    }

    res.render('pages/home', {
        name: 'Guilherme',
        mostrarIdade,
        produtos: [
            {nomeDoProduto: 'Arroz', preco: 14.99},
            {nomeDoProduto: 'Feijão', preco: 6.49},
            {nomeDoProduto: 'Brócolis', preco: 4.12}   
        ],
        frases: [
            'frase do dia 1',
            'frase do dia 2',
            'frase do dia 3'
        ]
    })
})