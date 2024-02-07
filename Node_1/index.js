const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "./product") {
    res.end("This is Product");
  } else if (pathName === "/api") {
    res.writeHead(404);
    res.end("API");
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "my-own-header": "hello-world",
    });
  }
  res.end("<h1>Page Not Found!</h1>");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to request on port 8000");
});
