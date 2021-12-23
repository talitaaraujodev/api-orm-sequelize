const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

// n precisa instanciar o método, pois  é um método static
router.get("/pessoas", PessoaController.listagemPessoas);
router.get("/pessoas/:id", PessoaController.obterPessoaPorId);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.deletarPessoa);
module.exports = router;