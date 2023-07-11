import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      username
    }
  }
`;

export const CREATE_LISTING = gql`
mutation createListing($title: String!, $description: String!, $price: Int!, $color: String, $condition: String, $size: String!) {
  createListing(title: $title, description: $description, price: $price, color: $color, condition: $condition, size: $size) {
      title
      description
      price
      color
      condition
      size
  }
}
`;

export const DELETE_LISTING = gql`
  mutation deleteListing ($id: ID!) {
    deleteListing(id: $id) {
      token
    }
  }
`;