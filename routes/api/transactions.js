const router = require('express').Router();
const Transactions = require('../../db/models').Transactions;
module.exports = router;

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

