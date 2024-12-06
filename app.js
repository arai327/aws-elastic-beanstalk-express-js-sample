const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('arai 2024/12/06'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
