const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect('mongodb+srv://challengeUser:WUMglwNBaydH8Yvu@challenge-xzwqd.mongodb.net/getircase-study?retryWrites=true', {
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