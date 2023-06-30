import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
  } catch (error) {
    throw error;
  }
};

app.listen(5000, () => {
  console.log('Connected to port 5000 successfully!');
});
