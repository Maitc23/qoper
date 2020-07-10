const router = require('express').Router();
const {newJob, userJobs, jobs, deleteJob, updateJob} = require('../controllers/jobs')
const verifyToken = require('../middlewares/verifyToken');


router.route('/job')
    .post(verifyToken, newJob)
    .get(userJobs)

router.route('/jobs')
    .get(jobs)

router.route('/job/:_id')
    .put(verifyToken, updateJob)
    .delete(verifyToken, deleteJob)
   



module.exports = router