const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.status(200);
  res.send(JSON.stringify({ messagem: "Olá!!" }));
});

app.listen(port, () => {
  console.log(`Server rodando na porta ${port}...`);
});

module.exports = app;
