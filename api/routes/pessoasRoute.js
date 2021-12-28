const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

// n precisa instanciar o método, pois  é um método static
router.get("/pessoas", PessoaController.listagemPessoas);
router.get("/pessoas/:id", PessoaController.obterPessoaPorId);
router.post("/pessoas", PessoaController.criarPessoa);
router.put("/pessoas/:id", PessoaController.atualizarPessoa);
router.delete("/pessoas/:id", PessoaController.deletarPessoa);
//matriculas
router.get("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.obterMatriculaPorId)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criarMatricula)
router.put("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.atualizarMatricula)
router.delete("/pessoas/:estudanteId/matricula/:matriculaId", PessoaController.deletarMatricula)
module.exports = router;