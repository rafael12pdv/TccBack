const DadosSanitario = require('../models/DadosSanitario')

module.exports = {

    async index(req, res) {
        const dados_sanitario = await DadosSanitario.findAll();
        return res.json(dados_sanitario);
    },
    async deleteSanitarioById(req, res) {
        const {id} = req.params
        const dados_sanitario = await DadosSanitario.findByPk(id)
        if(dados_sanitario){
           await dados_sanitario.destroy()
            return res.status(200).json({
                message: "Deletado!"
            });
        } else {
            return res.status(500).json({
                message: "Dado não encontrado!"
            });
        }
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