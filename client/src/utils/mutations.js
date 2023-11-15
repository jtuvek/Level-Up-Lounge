import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $username: String!, $email: String!, $password: String!, $favConsole: Console!) {
    addUser(firstName: $firstName, lastName: $lastName, username: $username, email: $email, password: $password, favConsole: $favConsole) {
      token
      user {
        _id
      }
    }
  }
`;