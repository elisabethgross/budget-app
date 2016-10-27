const router = require('express').Router();
const Transaction = require('../../db/models').Transaction;
module.exports = router;

router.get('/', function (req, res, next) {
  Transaction.findAll()
  .then(transactions => res.json(transactions))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Transaction.create(req.body)
  .then(createdTransaction => res.json(createdTransaction))
  .catch(next);
});

