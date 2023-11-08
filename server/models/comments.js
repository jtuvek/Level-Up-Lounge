const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
    commentTitle: {
        type: String,
        required: true,
        trim: true,
    },
    commentText: {
        type: String,
        required: true,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;