const express = require('express');
const router  = express.Router();

const authRoutes = require('./auth');
const thrRoutes  = require('./threads');

router.use('/', authRoutes);
router.use('/threads', thrRoutes);

module.exports = router;