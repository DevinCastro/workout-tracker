const router = require('express').Router()
const { Workout } = require('../models')

router.get('/workouts', (req, res) => {
  // leave empty to get back everything
  Workout.find()
    .then(item => res.json(item))
    .catch(err => console.log(err))
})


router.post('/workouts', (req, res) => {
  Workout.create(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router