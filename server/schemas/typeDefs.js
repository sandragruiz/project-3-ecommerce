const { gql } = require('apollo-server-express');

const typeDefs = gql`
# define which fields are accessible from the specified model
type User { 
    _id: ID!
    username: String!
    email: String!
}
type Auth {
    token: String!
    user: User
}

#define which queries the front end is allowed to make and what data is returned
type Query {
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;



module.exports = typeDefs;