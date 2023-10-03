const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    id: Number,
    columnOrder: Array,
    columns: Object,
    tasks: Object
})

module.exports = mongoose.model('table', dataSchema)