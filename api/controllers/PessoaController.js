const database = require("../models");

class PessoaController {
    // método static sem ter que ser chamado por instância
    static async listagemPessoas(req, res) {
        try {
            const listaPessoas = await database.Pessoas.findAll();
            return res.status(200).json(listaPessoas);

        } catch (error) {
            return res.status(500).json(error.message);

        }
    }
    static async obterPessoaPorId(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(pessoa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criarPessoa(req, res) {
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            res.status(201).json(novaPessoa);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const novaPessoa = req.body;
        try {
            await database.Pessoas.update(novaPessoa, { where: { id: id } })
            const pessoaAtualizada = await database.Pessoas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(pessoaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletarPessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: { id: parseInt(id) }
            })
            return res.status(200).json({ message: `Usuário ${id} deletado com suceso` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    //matriculas
    // http://localhost:3000/pessoas/1/matricula/5
    // http://localhost:3000/pessoas/:estudanteId/matricula/:matriculaId
    static async obterMatriculaPorId(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: parseInt(matriculaId),
                    estudanteId: parseInt(estudanteId)
                }
            })
            return res.status(200).json(umaMatricula)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async criarMatricula(req, res) {
        const { estudanteId } = req.params
        const novaMatricula = { ...req.body, estudanteId: Number(estudanteId) };
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            res.status(201).json(novaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async atualizarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novasInfos = req.body;
        try {
            await database.Matriculas.update(novasInfos, { where: { id: parseInt(matriculaId), estudante_id: parseInt(estudanteId) } })
            const MatriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: parseInt(matriculaId)
                }
            })
            return res.status(200).json(MatriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
    static async deletarMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: { id: parseInt(matriculaId) }
            })
            return res.status(200).json({ message: `Matricula ${matriculaId} deletado com suceso` });

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PessoaController;