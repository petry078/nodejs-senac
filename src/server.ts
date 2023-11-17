import express, {Request, Response} from 'express'
import mainRoutes from './routes/index'
import path from 'path'
import mustache from 'mustache-express'
import dotenv from 'dotenv'

//server use doenv
dotenv.config()

//atribui express() para a variável servidor
const server = express()

//atribui mustache() para a variavel mustache
server.set('view engine', 'mustache')

//atribui o caminho da pasta views (html)
server.set('views',path.join(__dirname,'views'))
server.engine('mustache',mustache())

//atribui o caminho da pasta public (imagens e css)
server.use(express.static(path.join(__dirname, '../public')))

//usando POST
server.use(express.urlencoded({extended:true}))

server.use(mainRoutes)

//404 page
server.use((req:Request, res:Response) => {
   res.status(404).send("Erro 404. Página não encontrada") 
})

//express.ouvindo a porta 3000
server.listen(process.env.PORT)
console.log(`http://localhost:4000/`)