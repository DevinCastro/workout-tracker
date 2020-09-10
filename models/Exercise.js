const { model, Schema } = require('mongoose')

const Exercise = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: false
  },
  reps: {
    type: Number,
    required: false
  },
  sets: {
    type: Number,
    required: false
  },
  distance: {
    type: Number,
    required: false
  },
  workout: {
    // the mongoose data type for ids
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }
}, { timestamps: true })

module.exports = model('Exercise', Exercise)