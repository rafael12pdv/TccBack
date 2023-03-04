const { Model, DataTypes } = require('sequelize');

class DadosProducao extends Model {
    static init(sequelize) {
        super.init({
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