// set up the connection for our database for working locally and for when hosted on heroku.  We use atlas to host the database with heroku.

module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})