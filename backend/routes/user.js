const express = require('express');
const router = express.Router();
const max = require("../middleware/limiter")
const multer = require('../middleware/multer-config')
const auth = require('../middleware/auth')
const userCtrl = require('../controllers/user');
//const postCtrl = require('../controllers/post');

router.post('/signup',userCtrl.signup, userCtrl.login);// , userCtrl.login permet de se connecter directement sans devoir retaper
router.post('/login', max.limiter, userCtrl.login);
//router.get('/:id', auth, userCtrl.users);
router.get('/', auth, userCtrl.users);
router.get('/:id', auth, userCtrl.user);

module.exports = router;