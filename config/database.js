//Set up mongoose connection
const mongoose = require('mongoose');
const mongoDB = 'mongodb+srv://kikichau:<password>@web-api-4azln.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
module.exports = mongoose;