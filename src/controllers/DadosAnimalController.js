const DadosAnimal = require('../models/DadosAnimal');
const Usuario = require('../models/Usuario');

module.exports = {

    async index(req, res) {
        const dados_animal = await DadosAnimal.findAll();
        return res.json(dados_animal);
    },
    async store(req, res) {
        const {id_user} = req.body;
        const {
            nome,
            sexo,
            raca,
            data_nascimento,
            origem,
            guia_animal
        } = req.body;
        const usuario = await Usuario.findByPk(id_user);
        if (!usuario){
            return res.status(400).json({error:'Usuario não encontrado'})
        }
        
        const dados_animal = await DadosAnimal.create({
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