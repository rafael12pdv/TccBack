const {
    where
} = require('sequelize');
const Usuario = require('../models/Usuario')
const {
    Op
} = require('sequelize');

module.exports = {

    async validaEmail(req, res) {
        const {
            email,
            senha,
        } = req.body;
        try {
            const usuario = await Usuario.findOne({
                where: {

                    email: {
                        [Op.iLike]: email
                    },
                    senha: senha
                }
            });

            if (usuario) {
                return res.status(200).json({
                  usuario
                });
            } else {
                return res.status(400).json({
                    message: "Email inválido"
                });
            }
        } catch (error) {
            return res.status(500).json({
                message: "Erro ao validar email"
            });
        }
    },

    async getUserbyId(req, res) {
        const {id} = req.params
        const user = await Usuario.findByPk(id)
        if(user){
           
            return res.json(user);
        } else {
            return res.status(500).json({
                message: "Usuário não encontrado!"
            });
        }
    },

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