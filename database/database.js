const sequelize = require('sequelize')

const connection = new sequelize(
    'db_contatos',
    'root',
    'bcd127',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
)

module.exports = connection

