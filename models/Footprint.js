const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Footprint = new Schema({
    date: Date,
    footprint: Number
    
})

module.exports = mongoose.model("Footprint", Footprint)