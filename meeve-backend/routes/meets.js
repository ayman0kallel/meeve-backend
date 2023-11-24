import express from 'express';
import { createMeet, getMeets } from '../controllers/meets.js';

const router = express.Router();

router.get('/meets', getMeets);

router.post('/CreerMeet', createMeet);

export default router;