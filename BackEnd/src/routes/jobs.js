const router = require('express').Router();
const {newJob, 
    userJobs, 
    jobs, 
    deleteJob, 
    updateJob, 
    acceptJob, 
    acceptCotization, 
    completedJob, 
    pauseJob,
    pausedJobs,
    cancelledJob, 
    getJob} = require('../controllers/jobs')
const verifyToken = require('../middlewares/verifyToken');


router.route('/job')
    .post(verifyToken, newJob)
    .get(verifyToken, userJobs)

router.route('/jobs')
    .get(verifyToken,jobs)

router.route('/job/:_id')
    .put(verifyToken, updateJob)
    .delete(verifyToken, deleteJob)
    .get(verifyToken, getJob);
   
router.route('/acceptJob')
    .put(verifyToken, acceptJob);

router.route('/cancelledJob/:_id')
    .put(verifyToken, cancelledJob)

router.route('/acceptCotization/:_id')
    .put(verifyToken, acceptCotization)

router.route('/completedJob/:_id')
    .put(verifyToken, completedJob)
    
router.route('/pausedJob')
    .get(verifyToken, pausedJobs)
    .put(verifyToken, pauseJob)


module.exports = router