const { User, Comments } = require('../models');

const resolvers = {
    Query: {
        comments: async () => {
            return await Comments.find({});
        },
        comment: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return await Comments.find(params);
        },
    },
    Mutation: {
        createComment: async (parent, args) => {
            const comment = await Comments.create(args);
            return await comment;
        },
        
    },
}

module.exports = resolvers;