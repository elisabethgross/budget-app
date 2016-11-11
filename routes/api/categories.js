const router = require('express').Router();
const Category = require('../../db/models').Category;
module.exports = router;

router.get('/alltransactions/:id', function (req, res, next) {
  console.log('req.params.id', req.params.id);
  Category.findById(req.params.id)
  .then(category => category.getTransaction)
  .then(transactions => console.log(transactions))
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
