const router = require('express').Router()
const { Exercise, Workout } = require('../models')

router.get('/exercises', (req, res) => {
  // leave empty to get back everything
  Exercise.find()
    .populate('workout')
    .then(post => res.json(post))
    .catch(err => console.log(err))
})


router.post('/exercises', (req, res) => {
  Exercise.create(req.body)
    .then(post => {
      Workout.findByIdAndUpdate(post.user, { $push: { exercises: exercise._id } })
        .then(() => res.json(post))
        .catch(err => console.log(err))


    })
    .catch(err => console.log(err))
})

router.put('/exercises/:id', (req, res) => {
  Exercise.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/exercises/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router