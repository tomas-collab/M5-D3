import express from 'express'
import { fileURLToPath } from 'url'
import {dirname,join} from 'path'
import fs from 'fs'
import uniqid from 'uniqid'





const authorsRouter = express.Router()
const currentFilePath = fileURLToPath(import.meta.url)
const currnetDirPath = dirname(currentFilePath)
const authorsJSONpath = join(currnetDirPath , 'authors.json')

                                 // post 
authorsRouter.post('/',(request,response)=>{
    console.log(request.body)
    console.log(uniqid())
    //step 1
    const newAuthors = {...request.body, id:uniqid(), createdAt: new Date()}
    //step 2
    const authors = JSON.parse(fs.readFileSync(authorsJSONpath))
    //step 3
    authors.push(newAuthors)
    //step 4
    fs.writeFileSync(authorsJSONpath,JSON.stringify(authors))
    response.status(201).send({id:newAuthors.id})
})
   
                                //get1
authorsRouter.get('/',(request,response)=>{
    const fileContent = fs.readFileSync(authorsJSONpath)
   
   
    response.send(JSON.parse(fileContent))
    // resp.send({currentFilePath,metaUrl: import.meta.url,authorsJSONpath}) 
})
                               //get2
authorsRouter.get('/:authorID',(request,response) => {

    const authors = JSON.parse(fs.readFileSync(authorsJSONpath))
    
    const author = authors.find(s => s.id === request.params.authorID)
    response.send(author)
    
})
                               //----------------------------put------------------------------------|
authorsRouter.put('/:authorID',(request,response)=>{
    const authors = JSON.parse(fs.readFileSync(authorsJSONpath))
    const remainingAuthors = authors.filter(author => author.id !== request.params.authorID)
    const updateAuthors = {...request.body,id:request.params.authorID}
    remainingAuthors.push(updateAuthors)
    fs.writeFileSync(authorsJSONpath,JSON.stringify(remainingAuthors))
    response.send(updateAuthors)})
                              //delete
authorsRouter.delete('/:authorID',(request,response)=>{
    const authors = JSON.parse(fs.readFileSync(authorsJSONpath))
    const remainingAuthors = authors.filter(author => author.id !== request.params.authorID)
    fs.writeFileSync(authorsJSONpath,JSON.stringify(remainingAuthors))
    response.status(204).send()})


export default authorsRouter