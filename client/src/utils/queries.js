import { gql } from '@apollo/client';

const typeDefs = gql`
  type Comment {
    _id: ID!
    // Add other comment fields as needed
  }

  type User {
    _id: ID!
    // Add other user fields as needed
  }

  type Query {
    comments: [Comment]
    comment(_id: ID!): Comment
  }

  input CommentInput {
    // Define input fields for creating a comment
  }

  input UserInput {
    // Define input fields for adding a user
    firstName: String!
    lastName: String!
    userName: String!
    email: String!
    favConsole: String!
    password: String!
    // Add other fields as needed
  }

  type Mutation {
    createComment(input: CommentInput): Comment
    addUser(input: UserInput): User
  }
`;

module.exports = typeDefs;
