const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGODB_URI = process.env.MONGO_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    maxMessageSize: 67108864
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});

db.on('error', (err) => {
    console.log(`MongoDB error: ${err}`);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('MongoDB disconnected due to app termination');
        process.exit(0);
    });
});

module.exports = db