const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecordsSchema = new Schema({
    counts: {
        type: Array,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
    },
    value: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Records', RecordsSchema);