const {Model, DataTypes} =  require('sequelize');

class Cadastro extends Model {
    static init(sequelize){
        super.init({
            numero_ima: DataTypes.INTEGER,
            inscricao_estadual: DataTypes.INTEGER,
            nome: DataTypes.STRING,
            nome_propiedade: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            confirma_senha: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Cadastro;