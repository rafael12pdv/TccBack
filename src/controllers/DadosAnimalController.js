const DadosAnimal = require('../models/DadosAnimal');

module.exports = {

    async index(req, res) {
        const dados_animal = await DadosAnimal.findAll();
        return res.json(dados_animal);
    },

    async deleteAnimalById(req, res) {
        const {id} = req.params
        const dadosAnimal = await DadosAnimal.findByPk(id)
        if(dadosAnimal){
           await dadosAnimal.destroy()
            return res.status(200).json({
                message: "Animal Deletado!"
            });
        } else {
            return res.status(500).json({
                message: "Animal não encontrado!"
            });
        }
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