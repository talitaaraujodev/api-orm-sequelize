const database = require("../models");
class TurmaController {
    // método static sem ter que ser chamado por instância
    static async listagemTurmas(req, res) {
        try {
            const listaTurmas = await database.Turmas.findAll();
            return res.status(200).json(listaTurmas);

        } catch (error) {
            return res.status(500).json(error.message);

        }
    }
    static async obterTurmaPorId(req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(turma)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criarTurma(req, res) {
        const novaTurma = req.body;
        try {
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            res.status(201).json(novaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarTurma(req, res) {
        const { id } = req.params;
        const novaTurma = req.body;
        try {
            await database.Turmas.update(novaTurma, { where: { id: id } })
            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(turmaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletarTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: { id: parseInt(id) }
            })
            return res.status(200).json({message: `Turma ${id} deletado com suceso`});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}
module.exports = TurmaController;