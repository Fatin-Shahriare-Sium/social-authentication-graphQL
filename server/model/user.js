let { Schema, model } = require('mongoose')

let userSchema = new Schema({
    name: String,
    email: String,
    password: String
})


let User = model('authUser', userSchema)

module.exports = User