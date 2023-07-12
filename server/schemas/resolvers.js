const { User, Listing, Category, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


// Create the functions that fulfill the queries defined in `typeDefs.js`

// const getListingHiddenFields = async (_, { listingId }) => {
//   try {
//     const listing = await Listing.findById(listingId).select('color condition size').exec();
//     return {
//       color: listing.color,
//       condition: listing.condition,
//       description: listing.description
//     };
//   } catch (error) {
//     throw new Error('Failed to fetch listing hidden fields.');
//   }
// };

const resolvers = {
  Query: {
    user: async (_parent, { email }) => {
      return User.findOne({ email }).select('-__v -password');
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      // create the user
      const user = await User.create({ username, email, password });
      // to reduce friction for the user, sign a JSON Web Token and log the user in after they are created
      // const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return user;
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
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user};
      
    },
    createListing: async (parent, { title, description, price, color, condition, size }) => {
      const listing = await Listing.create({ title, description, price, color, condition, size });
      return listing;
    },
  },
  
  Query: {
    categories: async () => {
      try {
        const categories = await Category.find();
        console.log('found categories')
        return categories,
        console.log('returned categories')
        
      } catch (error) {
        throw new Error('Failed to fetch categories');
      }
    },
  }
};

module.exports = resolvers;