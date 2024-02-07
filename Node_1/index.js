const fs = require('fs')
const http = require('http')


/////////////////////////////////////////////////////////////
//Files

// Blocking, synchronous way
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)
// const textOut = `This is what we know about avocado: ${textIn}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOut)
// console.log("File written!")

// Non-blovking, asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8',  (err, data1) => {
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8',  (err, data2) => {
//         console.log(data2)
//     })
// })

// console.log('Will read file')




//////////////////////////////
//Server

const server = http.createServer((req, res)=>{
    res.end("Hello from The server!")
})

server.listen(8000, '127.0.0.1', () =>{
    console.log("Listening to request on port 8000")
})