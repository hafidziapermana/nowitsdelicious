const mongoose = require('mongoose')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.Promise = global.Promise;       // Native Node.js promise
mongoose.connect(process.env.DATABASE);  // connect server to mongodb
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// Import Models
require('./models/Store')

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});