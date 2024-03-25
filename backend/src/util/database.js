const Sequelize = require('sequelize');

const sequelize = new Sequelize('boon-arabia' , 'root' , '' , {
    dialect : 'mysql',
    host : 'localhost',
} );

module.exports = sequelize;