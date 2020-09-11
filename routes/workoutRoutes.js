const router = require('express').Router()
const { Workout } = require('../models')


// these are all of the api routes:


// this get request returns back all of the workouts
router.get('/workouts', (req, res) => {
  // leave empty to get back everything
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// this get request hooks into the front end stats page.
router.get('/workouts/range', (req, res) => {
  // leave empty to get back everything
  Workout.find()
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// Post a workout
router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

// Update a workout.  This is used to push exercises into an existing workout.
router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})



module.exports = router