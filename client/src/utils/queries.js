import { gql } from '@apollo/client'

export const GET_USER = gql`
  query user {
    user {
      _id
      username
      email
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    User {
      _id
      username
      email
      password
    }
  }
`;

export const GET_BY_USER = gql`
  query user {
    user {
      listings
    }
  }
`;

// export const GET_BY_CATEGORY = gql`

// `;

// export const GET_BY_SIZE = gql`

// `;

// export const GET_BY_CONDITION = gql`

// `;

// export const GET_BY_COLOR = gql`

// `;