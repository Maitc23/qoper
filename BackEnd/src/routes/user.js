const router = require('express').Router();
const {userProveedor} = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');


router.route('/userProveedor/:_id')
    .get(verifyToken, userProveedor)


module.exports = router