const http = require("http");

const HOST = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end("Hello World! Welcome Back!");
});

server.listen(PORT, HOST);
