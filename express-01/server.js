const express = require('express');
const app = express();

app.get('/', (req, res) => res.sendFile(`${__dirname}/src/index.html`));
app.get('/about', (req, res) => res.sendFile(`${__dirname}/src/about.html`));

app.listen(3000, () => { console.log(`Servidor abierto: http://localhost:3000`) })