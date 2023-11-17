import {Router, Request, Response} from 'express'
import * as homeController from '../controllers/homeControllers'
import * as infoController from '../controllers/infoControllers'

const router = Router()

router.get('/', homeController.home)
router.get('/contato', infoController.contato)
router.get('/sobre', infoController.sobre)
router.get('/nome', infoController.nome)
router.get('/nascimento', infoController.nascimento)
router.get('/postNascimento', infoController.nascimento)
router.get('/login', infoController.login)
router.get('/postLogin', infoController.login)

export default router