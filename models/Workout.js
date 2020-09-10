const { model, Schema } = require('mongoose')

const Workout = new Schema({
  day: {
    type: Date,
    required: true
  },
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  }]
}, { timestamps: true })


module.exports = model('Workout', Workout)