const DadosSanitario = require('../models/DadosSanitario')

module.exports = {

    async index(req, res) {
        const dados_sanitario = await DadosSanitario.findAll();
        return res.json(dados_sanitario);
    },
    async store(req, res) {
        const {
            nome,
            numero_nf,
            nome_medicacao,
            dose_utilizada,
            preco,
            data_aplicacao,
            id_animal
        } = req.body;

        const dados_sanitario = await DadosSanitario.create({
            nome,
            numero_nf,
            nome_medicacao,
            dose_utilizada,
            preco,
            data_aplicacao,
            id_animal
        });

        return res.json(dados_sanitario);

    }
};