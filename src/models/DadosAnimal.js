const { Model, DataTypes } = require('sequelize');

class DadosAnimal extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            sexo: DataTypes.BOOLEAN,
            raca: DataTypes.STRING,
            data_nascimento: DataTypes.INTEGER,
            origem: DataTypes.STRING,
            guia_animal: DataTypes.STRING,
        }, {
            sequelize

        })

    }
    //static associate(models) {
        //this.belongsTo(models.Usuario, { foreignKey: 'id_user', as: 'Owner' })
    }


module.exports = DadosAnimal;