const DadosAnimal = require('../models/DadosAnimal');

module.exports = {

    async index(req, res) {
        const dados_animal = await DadosAnimal.findAll();
        return res.json(dados_animal);
    },
    async store(req, res) {

        const {
            id_user,
            nome,
            sexo,
            raca,
            data_nascimento,
            origem,
            guia_animal
        } = req.body;


        const dados_animal = await DadosAnimal.create({
            id_user,
            nome,
            sexo,
            raca,
            data_nascimento,
            origem,
            guia_animal
        });

        return res.json(dados_animal);

    }
};