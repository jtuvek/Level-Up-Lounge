const typeDefs =`
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

type Comments {
    _id: ID
    commentTitle: String
    commentText: String
    createdAt: String
    username: String
}

type Query {
    comments: [Comments]
    comment(commentId: ID!): Comments
}

type Mutation {
    createComment(commentTitle: String!, commentText: String!, username: String!): Comments
}
`;

module.exports = typeDefs;