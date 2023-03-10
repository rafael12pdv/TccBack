const { Model, DataTypes } = require('sequelize');

class DadosProducao extends Model {
    static init(sequelize) {
        super.init({
            id_user: DataTypes.INTEGER,
            id_animal: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            quantidade_de_litros: DataTypes.INTEGER,
            data_coleta: DataTypes.INTEGER,
            observacao: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = DadosProducao;