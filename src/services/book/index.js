// import express from 'express'
// import fs from 'fs'
// import { fileURLToPath } from 'url'

// const booksJSONPath = join(dirname(fileURLToPath(import.meta.url)),'books.json')
// const booksRouter = express.Router()
// const getBooks =()=>{
//     const contentAsBuffer = fs.readFileSync(booksJSONPath)
//     return JSON.parse(contentAsBuffer)
// }

// const writeBooks = content => fs.writeFileSync(booksJSONPath,JSON.stringify(content))
// booksRouter.get('/',(req,resp)=>{
//     console.log('Query params -->',req.query)
//     const books = getBooks()
//     if(req.query && req.query.title){
//         const filteredBooks = books.filter(b=>b.title===req.query.title)
//         resp.send(filteredBooks)
//     }else{
//         resp.send(books)
//     }
//     resp.send(books)
// })

// booksRouter.get('/:bookID',(req,resp)=>{
//     const books = getBooks()
//     const book = book.find(b => b.id === req.params.bookID)
//     resp.send(book)
// })
// //|------------------------POST--------------------|
// booksRouter.post('/',(req,resp)=>{
//     const books = getBooks()
//     const newBook = {...req.body,id:uniqid(),createdAt:new Date()}
//     books.push(newBook)
//     writeBooks(books)
//     resp.status(201).send({id:newBook.id})
// })

// booksRouter.put('/',(req,resp)=>{
//     const books = getBooks()
//     const remainingBooks = books.filter(b=>b.id!==req.params.id)
//     const modifiedBook = {...req.body,id:params.id}
//     remainingBooks.push(modifiedBook)
//     writeBooks(remainingBooks)
//     resp.send(modifiedBook)
// })

// booksRouter.delete('/:bookID',(req,resp)=>{
//     const books = getBooks()
//     const deletedBook = books.filter(b=> b.id!==req.params.bookID)
//     writeBooks(deletedBook)
//     resp.status(204).send()
// })

// export default booksRouter