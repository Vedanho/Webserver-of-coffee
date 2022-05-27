const mongoose = require('mongoose')

const coffeeSchema = mongoose.Schema({
    name: String,
    price: Number,
    stock: Boolean,
    caffeine: Boolean,
    size: Number,
    description: String
})

const Coffee = mongoose.model('Coffee', coffeeSchema)

module.exports = Coffee