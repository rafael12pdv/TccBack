const { Model, DataTypes } = require('sequelize');

class DadosProducao extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            id_animal: DataTypes.INTEGER,
            quantidade_de_litros: DataTypes.INTEGER,
            data_coleta: DataTypes.INTEGER,
            observacao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = DadosProducao;