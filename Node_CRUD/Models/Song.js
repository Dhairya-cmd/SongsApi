var mongoose = require('mongoose');

var songSchema = mongoose.Schema({
    name: String,
    singer: String
})

module.exports = mongoose.model("songs",songSchema)