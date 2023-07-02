const { gql } = require('apollo-server-express');

const typeDefs = gql`
# define which fields are accessible from the specified model
type {

}
#define which queries the front end is allowed to make and what data is returned
type Query {

}`



module.exports = typeDefs;