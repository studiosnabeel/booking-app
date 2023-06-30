import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    throw error;
  }
};

//middleware

app.use('/auth', authRoute);

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

app.listen(5000, () => {
  connect();
  console.log('Connected to port 5000 successfully!');
});
