// import mongoose from 'mongoose';
const mongoose = require('mongoose');
// const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    title: String, // String is shorthand for {type: String}
    age: Number,
    body: String,
    city: String
        // comments: [{ body: String, date: Date }],
        // date: { type: Date, default: Date.now },
        // hidden: Boolean,
        // meta: {
        //     votes: Number,
        //     favs: Number
        // }
});

const User = mongoose.model('User', userSchema)

module.exports = User;