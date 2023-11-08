import express, {Request, Response} from 'express'
import mainRoutes from './routes/index'

//atribui express() para a variável servidor
const servidor = express()

servidor.use(mainRoutes)

//express.ouvindo a porta 3000
servidor.listen(3000)
console.log(`http://localhost:3000/`)