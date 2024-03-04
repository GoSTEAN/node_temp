const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
    return;
  }
  if (req.url === "/about") {
    res.end("Here is our short history");
    return;
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't find the page you are looking for</p>
    <a href="/">Back home</a>
  `);
});

server.listen(5001);






const http = require("http");

const server1 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my Channel");
  } else if (req.url === "/contact") {
    res.end("Here is my number, so call me maybe");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>This page does not exist</p>
    <a href="/" >Back to home</a>
  `);
  }
});

server.listen(5001);










