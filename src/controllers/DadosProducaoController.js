const DadosProducao = require('../models/DadosProducao')

module.exports = {

    async index(req, res) {
        const dados_producoes = await DadosProducao.findAll();
        return res.json(dados_producoes);
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