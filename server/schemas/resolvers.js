const { User, Listing, Category, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { generateToken, verifyToken, authMiddleware } = require('../utils/auth');


// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    }
  },

Mutation: {
  addUser: async (parent, { username, email, password }) => {
    // create the user
    const user = await User.create({ username, email, password });
    // to reduce friction for the user, sign a JSON Web Token and log the user in after they are created
    const token = generateToken(user);
    // Return an `Auth` object that consists of the signed token and user's information
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
    const user = await User.findOne({ email });

    // If there is no user with that email address, return an Authentication error stating so
    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }

    // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
    const correctPw = await user.isCorrectPassword(password);

    // If the password is incorrect, return an Authentication error stating so
    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    // If email and password are correct, sign user into the application with a JWT
    const token = verifyToken(user);

    // Return an `Auth` object that consists of the signed token and user's information
    return { token, user };
  },
  
},
};

module.exports = resolvers;