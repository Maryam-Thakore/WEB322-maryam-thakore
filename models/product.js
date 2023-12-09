const Sequelize = require('sequelize');
const sequelize = require('../db'); 

const Product = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isbn: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  company: {
    type: Sequelize.STRING,
    allowNull: true,
  },
 
});

module.exports = Product;
