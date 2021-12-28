const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController");

const router = Router();

// n precisa instanciar o método, pois  é um método static
router.get("/turmas", TurmaController.listagemTurmas);
router.get("/turmas/:id", TurmaController.obterTurmaPorId);
router.post("/turmas", TurmaController.criarTurma);
router.put("/turmas/:id", TurmaController.atualizarTurma);
router.delete("/turmas/:id", TurmaController.deletarTurma);
module.exports = router;