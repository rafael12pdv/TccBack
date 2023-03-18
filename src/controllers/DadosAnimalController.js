const DadosAnimal = require('../models/DadosAnimal');

module.exports = {

    async index(req, res) {
        const dados_animal = await DadosAnimal.findAll();
        return res.json(dados_animal);
    },
    async updateAnimal(req, res) {
        const {
            id_user,
            nome,
            sexo,
            raca,
            data_nascimento,
            origem,
            guia_animal
        } = req.body;

        const animalId = req.params.id;

        try {
            const [rowsUpdated, [updatedAnimal]] = await DadosAnimal.update({
                id_user,
                nome,
                sexo,
                raca,
                data_nascimento,
                origem,
                guia_animal
            }, {
                where: {
                    id: animalId
                },
                returning: true
            });

            if (rowsUpdated === 0) {
                return res.status(404).json({
                    message: "Animal não encontrado!"
                });
            }

            return res.json(updatedAnimal);
        } catch (error) {
            return res.status(500).json({
                message: "Internal server error"
            });
        }
    },

    async deleteAnimalById(req, res) {
        const {
            id
        } = req.params
        const dadosAnimal = await DadosAnimal.findByPk(id)
        if (dadosAnimal) {
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