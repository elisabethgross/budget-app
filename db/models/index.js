'use strict';

const Transaction = require('./transaction');
const Category = require('./category');

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

Category.hasMany(Transaction); // Can do Category.getTransaction to get all transactions for a specific category
Transaction.belongsTo(Category); // Adds a categoryId column to the Transaction table, Transaction.getCategory to get the category

module.exports = {
  Transaction: Transaction,
  Category: Category
};

