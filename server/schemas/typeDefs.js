const { gql } = require('apollo-server-express');

const typeDefs = gql`
# define which fields are accessible from the specified model

type Cart {
    id: ID!
    user: User
    items: [Listing]
}

type Category {
    id: ID!
    name: String!
}

type Listing {
    id: ID!
    title: String!
    description: String!
    price: Int!
    color: String
    condition: String!
    size: String!
    seller: User
    createdAt: String!
    category_id: Category
    image: String
}

type Order {
    id: ID!
    customer: User!
    total: Int!
    payment: String!
    stringAddress: String!
    orderStatus: String!
    items: [Listing]
}

type User { 
    _id: ID!
    username: String!
    email: String!
    listings: [Listing]
}

type Wishlist {
    id: String!
    user: User
    items: [Listing]
}

type Auth {
    token: String!
    user: User
}

#define which queries the front end is allowed to make and what data is returned
type Query {
    user (username: String!): User
    getByUser (username: String!): Listing
    getByCategory (categoryName: String!): Listing
    getBySize (size: String!): Listing
    getByCondition (condition: String!): Listing
    getByColor (color: String!): Listing
}
type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!): Auth
  }

#for retrieving more listing fields upon clicking on a product
  type Query {
    getListingHiddenFields(listingId: ID!): ListingHiddenFields!
  }
  
  type ListingHiddenFields {
    color: String
    condition: String
    description: String
`;



module.exports = typeDefs;