const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: String,
        // required: True
    },
    email: {
        type: String,
        // required: True,
        // unique: True
    },
    password: {
        type: String,
        // required: True
    },
    date: {
        type: Date,
        default: Date.now
    }
  });

const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports =  User;