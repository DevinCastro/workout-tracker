const express = require('express')
const { join } = require('path')

// create our express server
const app = express()

// bring in our middleware
app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// bring in our routes
app.use(require('./routes'))

// have our server listen on a port
require('./db')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))