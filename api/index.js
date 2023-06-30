import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.listen(5000, () => {
  console.log('Connected to port 5000 successfully!');
});
