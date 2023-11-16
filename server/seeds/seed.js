const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust the path based on your project structure
const Comment = require('./models/comment'); // Adjust the path based on your project structure
const Reply = require('./models/reply'); // Adjust the path based on your project structure

// Connect to your MongoDB database
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Sample data for users, comments, and replies
const users = [
  {
    username: 'user1',
    email: 'user1@example.com',
    password: 'password1',
    favConsole: 'PlayStation',
  },
  {
    username: 'user2',
    email: 'user2@example.com',
    password: 'password2',
    favConsole: 'Xbox',
  },
];

const comments = [
  {
    user: null, // Will be populated with user data during seeding
    content: 'This is a great forum!',
  },
  {
    user: null,
    content: 'I love gaming discussions here!',
  },
];

const replies = [
  {
    user: null, // Will be populated with user data during seeding
    comment: null, // Will be populated with comment data during seeding
    content: 'I agree!',
  },
  {
    user: null,
    comment: null,
    content: 'What is your favorite game?',
  },
];

// Seed function to populate the database
async function seed() {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Comment.deleteMany({});
    await Reply.deleteMany({});

    // Seed users and store their IDs for comments and replies
    const userDocs = await User.create(users);
    const userIds = userDocs.map(user => user._id);

    // Seed comments and replies, associating them with users
    const commentDocs = await Comment.create(comments.map((comment, index) => ({ ...comment, user: userIds[index % userIds.length] })));
    const replyDocs = await Reply.create(replies.map((reply, index) => ({ ...reply, user: userIds[index % userIds.length], comment: commentDocs[index % commentDocs.length]._id })));

    console.log('Database seeded successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
}

// Call the seed function
seed();
