const database = require("../models");

class NivelController {
    static async listagemNiveis(req, res) {
        try {
            const listaNiveis = await database.Niveis.findAll();
            return res.status(200).json(listaNiveis);

        } catch (error) {
            return res.status(500).json(error.message);

        }
    }
    static async obterNivelPorId(req, res) {
        const { id } = req.params;
        try {
            const nivel = await database.Niveis.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(nivel)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criarNivel(req, res) {
        const novoNivel = req.body;
        try {
            const novaNivelCriado = await database.Niveis.create(novoNivel)
            res.status(201).json(novoNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarNivel(req, res) {
        const { id } = req.params;
        const novoNivel = req.body;
        try {
            await database.Niveis.update(novoNivel, { where: { id: id } })
            const nivelAtualizado = await database.Niveis.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletarNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
                where: { id: parseInt(id) }
            })
            return res.status(200).json({message: `Nivel ${id} deletado com suceso`});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = NivelController;