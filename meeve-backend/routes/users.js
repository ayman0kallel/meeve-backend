import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

// all routes here are starting with /users, display all users
router.get('/', getUsers);

// add route
router.post('/', createUser);

// user detail route
router.get('/:id', getUser);

//delete route
router.delete('/:id', deleteUser);

// update route
router.patch('/:id', updateUser);

export default router;