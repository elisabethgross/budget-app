const router = require('express').Router();
const Category = require('../../db/models').Category;
module.exports = router;

router.get('/alltransactions/:id', function (req, res, next) {
  Category.findById(req.params.id)
  .then(category => {
    return category.getTransactions();
  })
  .then(transactions => res.send(transactions))
  .catch(next);
});

router.get('/', function (req, res, next) {
  Category.findAll()
  .then(categories => {
    res.json(categories);
  })
  .catch(next);
});


router.post('/', function (req, res, next) {
  Category.create(req.body, {raw:true})
  .then(createdCategory => res.json(createdCategory))
  .catch(next);
});
