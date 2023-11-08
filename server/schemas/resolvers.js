const { User, Comment } = require('../models');

const resolvers = {
    Query: {
        comments: async () => {
            return Comment.find({});
        },
        comment: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Comment.find(params);
        },
    },
    Mutation: {
        createComment: async (parent, args) => {
            const comment = await Comment.create(args);
            return comment;
        },
        
    },
}