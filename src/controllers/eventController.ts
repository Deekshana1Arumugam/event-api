import { Request, Response } from 'express';
import Event from '../models/Event';

export const createEvent = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { title, description, date } = req.body;
    if (!Date.parse(date)) {
      res.status(400).json({ error: 'Invalid date' });
    }

    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};


