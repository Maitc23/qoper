const router = require('express').Router();
const {userMe} = require('../controllers/user');
const verifyToken = require('../middlewares/verifyToken');


router.route('/userMe')
    .get(verifyToken, userMe)


module.exports = router