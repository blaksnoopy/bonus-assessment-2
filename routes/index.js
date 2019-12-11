var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies');

/* GET home page. */
router.get('/', hobbiesCtrl.index);
router.post('/add', hobbiesCtrl.create);
router.post('/delete/:id', hobbiesCtrl.delete);


module.exports = router;
