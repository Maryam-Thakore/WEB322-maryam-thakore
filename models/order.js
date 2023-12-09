const Sequelize = require('sequelize');
const sequelize = require('../db'); 

const Order = sequelize.define('order', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'Pending',
    allowNull: false,
  },
  
});

module.exports = Order;
