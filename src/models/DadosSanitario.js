const { Model, DataTypes } = require('sequelize');

class DadosSanitario extends Model {
    static init(sequelize) {
        super.init({
            id_user: DataTypes.INTEGER,
            id_animal: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            numero_nf: DataTypes.INTEGER,
            nome_medicacao: DataTypes.STRING,
            dose_utilizada: DataTypes.STRING,
            preco: DataTypes.STRING,
            data_aplicacao: DataTypes.STRING,
        }, {
            sequelize

        })

    }
    }


module.exports = DadosSanitario;