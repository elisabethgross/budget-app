const router = require('express').Router();
const Transactions = require('../../db/models').Transactions;
module.exports = router;

router.get('/total', function (req, res, next) {
  Transactions.getTotal()
  .then(sum => res.json(sum));
});

// router.get('/total', function (req, res, next) {
//   Transactions.findAll()
//   .then(transactions => {
//     let sum = 0;
//     transactions.forEach(transaction => {sum += transaction.amount;});
//     res.json(sum);
//   });
// });

router.get('/', function (req, res, next) {
  Transactions.findAll()
  .then(transactions => res.json(transactions))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Transactions.create(req.body)
  .then(createdTransaction => res.json(createdTransaction))
  .catch(next);
});

