const Cadastro = require('../models/Cadastro')

module.exports = {

    async index(req, res) {
        const cadastro = await Cadastro.findAll();
        return res.json(cadastro);
    },
    async store(req, res) {
        const {
            numero_ima,
            inscricao_estadual,
            nome,
            nome_propiedade,
            email,
            senha,
            confirma_senha
        } = req.body;

        const cadastro = await Cadastro.create({
            numero_ima,
            inscricao_estadual,
            nome,
            nome_propiedade,
            email,
            senha,
            confirma_senha
        });

        return res.json(cadastro);

    }
};