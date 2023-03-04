const {Model, DataTypes} =  require('sequelize');

class Usuario extends Model {
    static init(sequelize){
        super.init({
            //id_user: DataTypes.INTEGER,
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

module.exports = Usuario;