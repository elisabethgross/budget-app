'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var Transactions = db.define('transactions', {
  name: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
}, {
  classMethods: {
    getTotal: function () {
      return Transactions.findAll({ raw: true })
      .then(transactions => {
        let sum = 0;
        transactions.forEach(transaction => {
          sum += transaction.amount;
        });
        return sum;
      });
    }
  }
});

module.exports = Transactions;
