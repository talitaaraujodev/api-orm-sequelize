const { Router } = require("express");
const NivelController = require("../controllers/NivelController");

const router = Router();

// n precisa instanciar o método, pois  é um método static
router.get("/niveis", NivelController.listagemNiveis);
router.get("/niveis/:id", NivelController.obterNivelPorId);
router.post("/niveis", NivelController.criarNivel);
router.put("/niveis/:id", NivelController.atualizarNivel);
router.delete("/niveis/:id", NivelController.deletarNivel);
module.exports = router;