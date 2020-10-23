const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
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
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', ItemSchema);