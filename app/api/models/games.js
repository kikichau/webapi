const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const GameSchema = new Schema({
   name: {
      type: String,
      trim: true,
      required: true,
   },
   game_information: {
      type: String,
      trim: true,
      required: true,
   },
   released_on: {
      type: Date,
      trim: true,
      required: true
   },
   developer: {
      type: String,
      trim: true,
      required: true,
   }
});
module.exports = mongoose.model('Game', GameSchema)