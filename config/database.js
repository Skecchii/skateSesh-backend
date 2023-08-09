import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

mongoose.connection.on('connected', () => console.log('connected to mongodb'));
