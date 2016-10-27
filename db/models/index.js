'use strict';

const Transaction = require('./transaction');
const Category = require('./category');

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

Category.hasMany(Transaction); // can do Category.getTransactions to get all transactions
Transaction.belongsTo(Category); // Transaction.getCategory to get the category

module.exports = {
  Transaction: Transaction,
  Category: Category
};

