const router = require('express').Router();
const Category = require('../../db/models').Category;
module.exports = router;

router.get('/', function (req, res, next) {
  Category.findAll()
  .then(categories => res.json(categories))
  .catch(next);
});

router.post('/', function (req, res, next) {
  Category.create(req.body)
  .then(createdCategory => res.json(createdCategory))
  .catch(next);
});




