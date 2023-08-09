import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  profilePicture: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
    required: true,
    min: 6,
    max: 30,
  },
  password: {
    type: String,
    required: true,
    min: 8,
    max: 64,
  },
  email: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
