import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req:Request , res:Response) => {
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

router.get('/contato', (req:Request , res:Response) => {
    res.render('pages/contato')
})

router.get('/sobre', (req:Request , res:Response) => {
    res.render('pages/sobre')
})

router.get('/nome', (req:Request , res:Response) => {
    let nome:string = req.query.nome as string
    let idade:string = req.query.idade as string
    let telefone:number = Number(req.query.telefone as string)
    res.render('pages/nome', {nome, idade, telefone})
})

router.get('/nascimento', (req:Request , res:Response) => {
    res.render('pages/nascimento')
})

router.post('/nascimento', (req:Request , res:Response) => {
    let ano:number = parseInt(req.body.ano as string)
    let nascimento:number = new Date().getFullYear() - ano
    res.render('pages/nascimento', {ano, nascimento})
})

router.get('/login', (req:Request , res:Response) => {
    res.render('pages/login')
})

router.post('/login', (req:Request , res:Response) => {
    let userInfo:string = req.body.userInfo as string
    let senha:string = req.body.senha as string
    console.log(userInfo)
    console.log(senha)
    res.render('pages/login')
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