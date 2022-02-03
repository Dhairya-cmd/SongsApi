var mongoose = require('mongoose');

var appsSchema = new mongoose.Schema({
    name: String,
    rating: Number
})

module.exports = mongoose.model("apps",appsSchema)