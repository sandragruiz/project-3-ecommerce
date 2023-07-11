const connectDB = require('../config/connection');
const categorySeeds = require('./categoryseeds');
const { User, Category } = require('../models');
const userSeeds = require('./userSeeds.json');

/*const deleteSeeds = async () => {
  try {
    await connectDB();

    await User.deleteMany({});
    console.log('Users deleted.');

    await Category.deleteMany({});
    console.log('Categories deleted.');

    console.log('Seeds deleted successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error deleting seeds:', error);
    process.exit(1);
  }
};

deleteSeeds();*/


const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(userSeeds);
    console.log('Users seeded.');

    await Category.insertMany(categorySeeds);
    console.log('Categories seeded successfully:');

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
};

seedDatabase();