const mongoose = require('mongoose')

const seriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    articles: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Series', seriesSchema)