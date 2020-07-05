const router = require('express').Router();
const {signin, signup, me, deleteAccount, tokenIsValid} = require('../controllers/auth'); 
const verifyToken = require('../middlewares/verifyToken');



router.route('/signup')
    .post(signup)

router.route('/signin')
    .post(signin)


router.route('/me')
    .get(verifyToken, me)


router.route('/delete')
    .delete(verifyToken, deleteAccount)

router.route('/tokenIsValid')
    .post(tokenIsValid)

module.exports = router