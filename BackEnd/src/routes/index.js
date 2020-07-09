const router =  require('express').Router();
const authRoutes = require('./auth'); 
const jobsRoutes = require('./jobs')

router.use('/', authRoutes);
router.use('/', jobsRoutes)

module.exports = router; 
