const sequelize = require('sequelize')

const connection = require('../database/database')


const contato = connection.define(
    'contatos',
    {
        nome: {
            type: sequelize.STRING,
            allowNull: false
        },
        telefone: {
            type: sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: sequelize.STRING,
            allowNull: false
        },
        favorito: {
            type: sequelize.BOOLEAN,
            allowNull: false
        },
        foto: {
            type: sequelize.STRING,
            allowNull: false
        }
        
    }, {
        timestamps: false // Isso desativa as colunas createdAt e updatedAt
    }
)


module.exports = contato