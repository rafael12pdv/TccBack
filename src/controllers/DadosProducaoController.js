const DadosProducao = require('../models/DadosProducao')

module.exports = {

    async index(req, res) {
        const dados_producoes = await DadosProducao.findAll();
        return res.json(dados_producoes);
    },

    async deleteProducaoById(req, res) {
        const {id} = req.params
        const dados_producoes = await DadosProducao.findByPk(id)
        if(dados_producoes){
           await dados_producoes.destroy()
            return res.status(200).json({
                message: "Deletado!"
            });
        } else {
            return res.status(500).json({
                message: "Dado não encontrado!"
            });
        }
    },
    async store(req, res) {
        const {
            nome,
            quantidade_de_litros,
            data_coleta,
            observacao,
            id_animal
        } = req.body;

        const dados_producoes = await DadosProducao.create({
            nome,
            quantidade_de_litros,
            data_coleta,
            observacao,
            id_animal
        });

        return res.json(dados_producoes);

    }
};