const router =  require('express').Router();
const authRoutes = require('./auth'); 
const jobsRoutes = require('./jobs');
const userRoutes = require('./user');

router.use('/', authRoutes);
router.use('/', jobsRoutes);
router.use('/', userRoutes);

module.exports = router; 
