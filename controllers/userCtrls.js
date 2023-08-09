import Users from '../models/Users.js';
import statusError from '../utils/errorMessage.js';

const createUser = async (req, res) => {
  try {
    const { username } = req.body;
    const existingUser = await Users.findOne({ username });
    if (existingUser) {
      return statusError(res, 400, 'username already exists');
    }
    const createdUser = await Users.create(req.body);
    res.json(createdUser);
  } catch (error) {
    return statusError(res, 400, 'error creating user', error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await Users.findById(req.params.userId);
    if (!user) {
      return statusError(res, 404, `user doesn't exist`);
    }
    return res.json(user);
  } catch (error) {
    return statusError(res, 400, 'error getting user', error);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });
    if (user) {
      const updatedUser = await Users.findById(req.params.userId);
      res.json(updatedUser);
    } else {
      statusError(res, 404, 'user not found');
    }
  } catch (error) {
    return statusError(res, 400, 'error updating user', error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deletedUser = await Users.findByIdAndDelete(req.params.userId);
    res.json(deletedUser);
  } catch (error) {
    return statusError(res, 400, 'error deleting user', error);
  }
};

export default {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
