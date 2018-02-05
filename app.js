const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/index')

const app = express() // Create app

app.set('views', path.join(__dirname, 'views'))         //Set folder view engine
app.set('view engine', 'pug')                           // Set view engine to pug
app.use(express.static(path.join(__dirname, 'public'))) // serves up static files from the public folder
app.use(bodyParser.urlencoded({ extended: true }))      // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                             // parse application/json
app.use(cookieParser())                                 // populates req.cookies with any cookies that came along with the request
app.use(logger('dev'));                                 // log server status response to CLI
app.use(cors());                                        // enable cors for all origins

// ROUTES
app.use('/', routes)


// ERROR HANDLER


module.exports = app