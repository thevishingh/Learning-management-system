const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    userName: String,
    userEmail: String,
    password: String,
    role: {
        type: String,
        default: 'user'
    }
});

module.exports = mongoose.model('User', UserSchema);
