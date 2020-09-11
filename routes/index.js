// first create a router
const router = require('express').Router()


// link api routes
router.use('/api', require('./workoutRoutes.js'))

// link html routes
router.use('/', require('./htmlRoutes.js'))




module.exports = router
