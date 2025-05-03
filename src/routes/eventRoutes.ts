import express from 'express';
import {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
 
} from '../controllers/eventController';

const router = express.Router();

router.post('/events', createEvent);
router.get('/events', getEvents);
router.get('/events/:id', getEventById);
router.put('/events/:id', updateEvent);

export default router;
