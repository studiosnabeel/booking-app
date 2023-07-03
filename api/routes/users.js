import express from 'express';
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//   res.send('hello user, your logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('hello user, your logged in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('hello Admin, your logged in and you can delete all account');
// });

//UPDATE
router.put('/:id', verifyUser, updateUser);

//DELETE
router.delete('/:id', verifyUser, deleteUser);

//GET
router.get('/:id', verifyUser, getUser);

//GETALL
router.get('/', verifyAdmin, getUsers);

export default router;
