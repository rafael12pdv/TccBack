const DadosProducao = require('../models/DadosProducao')

module.exports = {

    async index(req, res) {
        const dados_sanitario = await DadosProducao.findAll();
        return res.json(dados_sanitario);
    },
    async store(req, res) {
        const {
            nome,
            numero_nf,
            nome_medicacao,
            dose_utilizada,
            preco,
            data_aplicacao
        } = req.body;

        const dados_sanitario = await DadosProducao.create({
            nome,
            numero_nf,
            nome_medicacao,
            dose_utilizada,
            preco,
            data_aplicacao
        });

        return res.json(dados_sanitario);

    }
};