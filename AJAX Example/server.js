const argv = require('yargs')
.usage('Usage: $0 -port [Port] -hostname [IP/Domain]')
.argv

const http = require('http');
var fs = require('fs');
var path = require('path');

const hostname = argv.hostname || '127.0.0.1';
const port = argv.port || 3000;


http.createServer(function (req, response) {
  console.log(`Petición: ${req.method} desde ${req.url}`);
  if (req.url === "/") {
    fs.readFile('./public/index.html', 'UTF-8', (err, html) => {
      response.writeHead(200, {
        'Content-Type': 'text/html'
      });
      response.end(html);
    })
  } else if (req.url === "/about") {
    let aboutPath = path.join(_dirname + '.html', 'public', req.url);
    let fileStream = fs.createReadStream(aboutPath, 'UTF-8');
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    fileStream.pipe(response);
  } else if (req.url.match(/.css$/)) {
    let cssPath = path.join(__dirname, 'public', req.url);
    let fileStream = fs.createReadStream(cssPath, 'UTF-8');
    response.writeHead(200, {
      'Content-Type': 'text/css'
    });
    fileStream.pipe(response);
  } else {
    fs.readFile('./public/404.html', 'UTF-8', (html) => {
      response.writeHead(404, {
        'Content-Type': 'text/html'
      });
      response.end(html);
    })
  }
}).listen(port, hostname, () => {
  console.log(`
  Server on -> http://${hostname}:${port}/
  `);
});