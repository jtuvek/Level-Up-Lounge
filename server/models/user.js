const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true, // removes whitespace from both ends of a string
        unique: true, // ensures that usernames are unique in the database
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // match: regex for email validation
    },
    password: {
        type: String,
        required: true,
    },
    favConsole: {
        type: String,
        required: true,
    },
});

const User = model('User', userSchema);

module.exports = User;
