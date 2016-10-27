'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var Transaction = db.define('transaction', {
  name: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Transaction;
