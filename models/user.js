const Sequelize = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
 
});

module.exports = User;
