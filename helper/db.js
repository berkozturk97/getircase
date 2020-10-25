const mongoose = require("mongoose");
require('dotenv/config')
require('./db')

module.exports = () => {
    mongoose.connect(process.env.MONGODB_SECRET_KEY, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
};