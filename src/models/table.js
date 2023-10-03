const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: Number,
    title: String
})

module.exports = mongoose.model('tableHead', dataSchema)