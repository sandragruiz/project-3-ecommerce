const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Listing {
    title: String!
    description: String!
    price: Int!
    color: String
    condition: String!
    size: String!
    seller: User
    createdAt: String
    category_id: Category
}

type User { 
    username: String!
    email: String!
    listings: [Listing]
}

type Cart {
    user: User
    items: [Listing]
}

type Category {
    name: String!
}

type Order {
    customer: User!
    total: Int!
    payment: String!
    stringAddress: String!
    orderStatus: String!
    items: [Listing]
}

type Wishlist {
    user: User
    items: [Listing]
}

type Auth {
    token: String
    user: User
}

type ListingHiddenFields {
    color: String
    condition: String
    description: String
}

type Query {
    user (username: String!): User
    getByUser (username: String!): Listing
    getByCategory (categoryName: String!): Listing
    getBySize (size: String!): Listing
    getByCondition (condition: String!): Listing
    getByColor (color: String!): Listing
    getListingHiddenFields(listingId: ID!): ListingHiddenFields!
}
type Mutation {
    login (email: String!, password: String!): Auth
    addUser (username: String!, email: String!, password: String!): User
    createListing (title: String!, description: String!, price: Int!, color: String, condition: String, size: String!): Listing
}
`;

module.exports = typeDefs;