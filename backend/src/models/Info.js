const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Info = sequelize.define('info', {
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING(50), allowNull: false },
  email: { 
    type: Sequelize.STRING(100), 
    allowNull: false, 
    validate: { isEmail: true }, 
    unique: 'uniqueEmail'
  },
  phone: { 
    type: Sequelize.STRING(11), 
    allowNull: false,
    validate: {
      is: {
        args: /^01\d{9}$/,
        msg: "Invalid phone number."
      }
    }
  },
});

module.exports = { Info };
