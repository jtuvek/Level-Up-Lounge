import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation Mutation($firstName: String!, $lastName: String!, $userName: String!, $email: String!, $password: String!, $favConsole: Console!) {
    addUser(firstName: $firstName, lastName: $lastName, userName: $username, email: $email, password: $password, favConsole: $favConsole) {
      token
      user {
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;