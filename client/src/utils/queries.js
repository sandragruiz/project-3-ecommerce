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
    user {
      _id
      username
      email
    }
  }
`;

export const GET_BY_USER = gql`
  query getByUser {
    user {
      listings
    }
  }
`;

export const GET_BY_CATEGORY = gql`
  query category {
    category {
      listings
    }
  }
 `;

export const GET_BY_SIZE = gql`
  query listing {
    listing {
      size
    }
  }
`;

export const GET_BY_CONDITION = gql`
  query listing {
    listing {
      condition
    }
  }
`;

export const GET_BY_COLOR = gql`
  query listing {
    listing {
      color
    }
  }
`;