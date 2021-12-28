const bodyParser = require("body-parser");
const pessoas = require("./pessoasRoute");
const niveis = require("./niveisRoute");
const turmas = require("./turmasRoute");
// app do arquivo  raiz
module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas);
    app.use(niveis);
    app.use(turmas);
}