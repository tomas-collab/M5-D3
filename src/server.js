import express from 'express'
import cors from 'cors'
import listEndPoints from 'express-list-endpoints'
import authorsRouter from './services/authors/index.js'
const server = express()
const port = 3000
server.use(cors())
server.use(express.json())

server.use('/authors', authorsRouter)
console.table(listEndPoints(server))
server.listen(port,()=>{
    console.log('server listening on port ' + port)
})