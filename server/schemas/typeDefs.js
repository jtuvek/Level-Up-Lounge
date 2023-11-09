const gql = require('apollo-server-express');

const typeDefs = gql`
enum Console {
    NINTENDO
    PLAYSTATION
    XBOX
}  

type User {
    _id: ID
    username: String
    email: String
    password: String
    favConsole: [Console]
}

type Comment {
    _id: ID
    commentTitle: String
    commentText: String
    createdAt: String
    username: String
}

type Query {
    comments: [Comment]!
    comment(commentId: ID!): Comment
}
`;

module.exports = typeDefs;