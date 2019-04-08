//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://kikichau:00000000@web-api-4azln.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;