const mongoose = require('mongoose')

const Schema = mongoose.Schema

const User = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100,
        unique: true,
    },
    email: {
        email: String,
        required: true,
        minlength: 4,
        maxlength: 100,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 100
    }

})

module.exports = mongoose.model("User", User)