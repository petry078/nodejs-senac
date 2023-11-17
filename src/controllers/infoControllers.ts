import {Request, Response} from 'express'

//get.contato
export const contato = ((req:Request, res:Response) => {
    res.render('pages/contato')
})

//get.sobre
export const sobre = ((req:Request, res:Response) => {
    res.render('pages/sobre')
})

//get.nome
export const nome = ((req:Request, res:Response) => {
    let nome:string = req.query.nome as string
    let idade:string = req.query.idade as string
    let telefone:number = Number(req.query.telefone as string)
    res.render('pages/nome', {nome, idade, telefone})
})

//get.nascimento
export const nascimento = ((req:Request, res:Response) => {
    let ano:number = parseInt(req.body.ano as string)
    let nascimento:number = new Date().getFullYear() - ano
    res.render('pages/nascimento', {ano, nascimento})
})

//post.nascimento
export const postNascimento = ((req:Request, res:Response) => {
    let ano:number = parseInt(req.body.ano as string)
    let nascimento:number = new Date().getFullYear() - ano
    res.render('pages/nascimento', {ano, nascimento})
})

//get.login
export const login = ((req:Request, res:Response) => {
    res.render('pages/login')
})

//post.login
export const postLogin = ((req:Request, res:Response) => {
    let userInfo:string = req.body.userInfo as string
    let senha:string = req.body.senha as string
    console.log(userInfo)
    console.log(senha)
    res.render('pages/login')
})