import {Router, Request, Response} from 'express'

const router = Router()

router.get('/', (req:Request , res:Response) => {
    res.send("/")
})

router.get('/contato', (req:Request , res:Response) => {
    res.send("/contato")
})

//rota dinamica
router.get("/noticias/:slug", (req:Request , res:Response) => {
    let slug:string = req.params.slug
    res.send(`Notícia: ${slug}`)
})

router.get("/voo/:origem-:destino", (req:Request , res:Response) => {
    let {origem, destino} = req.params
    res.send(`Voos de ${origem} até ${destino}`)
})

export default router