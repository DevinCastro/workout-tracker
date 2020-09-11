const { model, Schema } = require('mongoose')


// create the new schema for Workout that has keys for day and exercises.  Notice exercises is an array that holds the information for the exercise the user is doing.  We can push in multiple exersices into one workout.
const Workout = new Schema({
  day: {
    type: Date,
    default: Date.now

  },
  exercises: [{
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    weight: {
      type: Number,
      required: false
    },
    sets: {
      type: Number,
      required: false
    },
    reps: {
      type: Number,
      required: false
    },
    duration: {
      type: Number,
      required: true
    },
    distance: {
      type: Number,
      required: false
    }
  }]
}, { timestamps: true })

module.exports = model('Workout', Workout)