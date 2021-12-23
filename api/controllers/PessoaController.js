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
            return res.status(200).json({message: `Usuário ${id} deletado com suceso`});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

}
module.exports = PessoaController;