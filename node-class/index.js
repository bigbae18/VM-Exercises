var http = require('http');

const hostname = '127.0.0.1';
let parametrosDeEjecucion = process.argv.slice(2);
const port = 3000;
let nuevoPuerto;
if (parametrosDeEjecucion.length > 0 && parametrosDeEjecucion.length < 2) {
    nuevoPuerto = parametrosDeEjecucion[0];
} else {
    nuevoPuerto = port;
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(
      `Hola mundillo
      estas escuchando al ${nuevoPuerto}
      no es una radio, aunque tiene nombre:
      ${hostname}`
    );
}).listen(nuevoPuerto, hostname, () => {
    console.log(`Server running at http://${hostname}:${nuevoPuerto}/`);
});