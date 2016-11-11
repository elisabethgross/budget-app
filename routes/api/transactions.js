const router = require('express').Router();
const Transaction = require('../../db/models').Transaction;
const Category = require('../../db/models').Category;
module.exports = router;

router.get('/', function (req, res, next) {
  Transaction.findAll({include: [ Category ]})
    .then(transactions => res.json(transactions))
    .catch(next);
});

router.post('/', function (req, res, next) {
  var transaction = Transaction.create(req.body);
  var category = Category.findById(req.body.category.id);
  Promise.all([transaction, category])
    .then(res => {
      var createdTransaction = res[0];
      var foundCategory = res[1];
      return createdTransaction.setCategory(foundCategory);
    })
    .then(transaction => {
      Transaction.findById(transaction.id, {include: [ Category ]})
      .then(transaction => res.send(transaction));
    })
    .catch(next);
});

