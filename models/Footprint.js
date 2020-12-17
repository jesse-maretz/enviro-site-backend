const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Footprint = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    footprint: Number
    
})

module.exports = mongoose.model("Footprint", Footprint)