import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user.js';
import { verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.get('/checkauthentication', verifyToken, (req, res, next) => {
  res.send('hello user, your logged in');
});

router.get('/checkuser/:id', verifyUser, (req, res, next) => {
  res.send('hello user, your logged in and you can delete your account');
});


//UPDATE
router.put('/:id', updateUser);

//DELETE
router.delete('/:id', deleteUser);

//GET
router.get('/:id', getUser);

//GETALL
router.get('/', getUsers);

export default router;
