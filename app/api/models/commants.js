const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const CommantSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    commant: {
        type: String,
        trim: true,
        required: true
    },
    released_on: {
        type: Date,
        trim: true,
        required: true
    }
});
module.exports = mongoose.model('Commant', CommantSchema)