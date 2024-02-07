const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const pathName = req.url;
    if(pathName === '/' || pathName === "/overview"){
        res.end('This is OVERVIEW');
    } else if(pathName === './product'){
        res.end('This is Product')
    }else{
        res.writeHead(404)
        res.end("This page is not available")
    }

  res.end("Hello from The server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
