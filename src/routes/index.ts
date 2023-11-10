import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req:Request , res:Response) => {
    let idade:number = 26
    let mostrarIdade:boolean = false

    if(idade > 18){
        mostrarIdade = true
    }

    res.render('home', {
        name: 'Guilherme',
        mostrarIdade,
        produtos: [
            {nomeDoProduto: 'Arroz', preco: 14.99},
            {nomeDoProduto: 'Feijão', preco: 6.49},
            {nomeDoProduto: 'Brócolis', preco: 4.12}   
        ]
    })

})

router.get('/contato', (req:Request , res:Response) => {
    res.render('contato')
})

//rotas dinamicas
router.get("/noticias/:slug", (req:Request , res:Response) => {
    let slug:string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get("/voo/:origem-:destino", (req:Request , res:Response) => {
    let {origem, destino} = req.params
    res.send(`Voos de ${origem} até ${destino}`)
})

export default router