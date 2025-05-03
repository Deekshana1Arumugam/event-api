import express from 'express';
import {
  createEvent,
 
} from '../controllers/eventController';

const router = express.Router();

router.post('/events', createEvent);

export default router;
