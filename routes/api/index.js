const router = require('express').Router();
module.exports = router;

router.use('/transactions', require('./transactions'));
router.use('/categories', require('./categories'));

