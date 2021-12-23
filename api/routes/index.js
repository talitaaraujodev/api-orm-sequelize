const bodyParser = require("body-parser");
const pessoas = require("./pessoaRoute");
// app do arquivo  raiz
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas);
}