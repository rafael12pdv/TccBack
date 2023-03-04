const Usuario = require('../models/Usuario')

module.exports = {

    async index(req, res) {
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
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

        const usuarios = await Usuario.create({
            numero_ima,
            inscricao_estadual,
            nome,
            nome_propiedade,
            email,
            senha,
            confirma_senha
        });

        return res.json(usuarios);

    }
};