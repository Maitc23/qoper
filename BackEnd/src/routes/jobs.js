const router = require('express').Router();
const {newJob, 
    userJobs, 
    jobs, 
    deleteJob, 
    updateJob, 
    acceptJob,
    getCotizationJobs,
    getAcceptedCotizationJobs,
    getCompletedJob,
    getCancelledJob,
    acceptCotization, 
    completedJob, 
    pauseJob,
    pausedJobs,
    cancelledJob, 
    getJob,
    retomeJob} = require('../controllers/jobs')
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

router.route('/cancelledJob')
    .get(verifyToken, getCancelledJob)
    .put(verifyToken, cancelledJob)

router.route('/cotizationJobs')
    
    .get(verifyToken, getCotizationJobs)
    .put(verifyToken, acceptCotization)

router.route('/acceptedCotizations')
    .get(verifyToken, getAcceptedCotizationJobs)

router.route('/retomeJobs')
    .put(verifyToken, retomeJob)

router.route('/completedJob')
    .get(verifyToken, getCompletedJob)
    .put(verifyToken, completedJob)
    
router.route('/pausedJob')
    .get(verifyToken, pausedJobs)
    .put(verifyToken, pauseJob)


module.exports = router