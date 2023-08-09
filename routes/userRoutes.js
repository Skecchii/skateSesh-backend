import express from 'express';
import userCtrls from '../controllers/userCtrls.js';

const router = express.Router();

router.get('/:userId', userCtrls.getUser);
router.post('/register', userCtrls.createUser);
router.patch('/edit-user/:userId', userCtrls.updateUser);
router.delete('/:userId', userCtrls.deleteUser);

export default router;
