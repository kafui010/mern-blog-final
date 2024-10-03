import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';  // Import dotenv

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the connection string from .env
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log('MongoDB is connected');
})
.catch((err) => {
    console.error('MongoDB connection error:', err);
});

const app = express();

// Start the server on port 8000
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});