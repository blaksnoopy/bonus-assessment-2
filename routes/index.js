var express = require('express');
var router = express.Router();
var hobbiesCtrl = require('../controllers/hobbies');

/* GET home page. */
router.get('/', hobbiesCtrl.index);
router.get('/show/:id', hobbiesCtrl.show);
router.put('/show/:id', hobbiesCtrl.update);
router.post('/add', hobbiesCtrl.create);
router.post('/delete/:id', hobbiesCtrl.delete);
router.post('/deleteHob/:id', hobbiesCtrl.delete);



module.exports = router;
