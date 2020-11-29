import {Request, Response} from 'express'
import { Link } from '../models/link'
import linksRepository from '../models/linksRepository'
import linksRespository from '../models/linksRepository'

function generateCode(){
    let text = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (let i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

async function postLink(req: Request, res: Response) {
    const link = req.body as Link
    link.code = generateCode()
    link.hits = 0
    const result = await linksRepository.add(link)
    if(!result.id) return res.sendStatus(400)
    
    link.id = result.id
    
    res.status(201).json(link)
}

function getLink(req: Request, res: Response){
    /*const code = req.params.code as string
    const link = links.find(item => item.code === code)
    if(!link){
        res.sendStatus(404)
    } else {
        res.json(link)
    }
    res.send('getLink')*/
}

function hitLink(req: Request, res: Response) {
   /* const code = req.params.code as string
    const index = links.findIndex(item => item.code === code)

    if(index === -1){
        res.sendStatus(404)
    } else {
        links[index].hits!++
        res.json(links[index])
    }*/
}

export default {
    postLink,
    getLink,
    hitLink
}