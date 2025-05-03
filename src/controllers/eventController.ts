import { Request, Response } from 'express';
import Event from '../models/Event';

export const createEvent = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { title, description, date } = req.body;
    if (!Date.parse(date)) {
      res.status(400).json({ status:400, error: 'Invalid date' });
    }

    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.status(201).json({status:201 , newEvent});
  } catch (err) {
    res.status(500).json({ status:500 , error: 'Server error' });
  }
};

export const getEvents = async (_req: Request, res: Response): Promise<void> => {
    try {
      const events = await Event.find();

      if (events.length === 0) {
        res.status(404).json({ status: 404 , error: 'No events found' });
      }else{
        res.status(200).json({status:200 , events});;
      }
  
    } catch (err) {
      res.status(500).json({ status:500, error: 'Server error' });
    }
  };
  
  
  export const getEventById = async (req: Request, res: Response): Promise<void> => {
    try {
      const event = await Event.findById(req.params.id);
  
      if (!event) {
        res.status(404).json({ status: 404, error: 'Event not found' });
      }else{
        res.status(200).json({status: 200, event});
      } 
      
    } catch (err) {
      res.status(500).json({ status: 500, error: 'Server error' });
    }
  };

  export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    const { title, description, date } = req.body;

    if (date && !Date.parse(date)) {
      res.status(400).json({status:400, error: 'Invalid date' });
    } else {
      try {
        const updated = await Event.findByIdAndUpdate(
          req.params.id,
          { title, description, date },
          { new: true }
        );
  
        if (!updated) {
          res.status(404).json({status:404, error: 'Event not found' });
        } else {
          res.status(200).json({status:200, updated});
        }
  
      } catch (err) {
        res.status(500).json({status:500, error: 'Server error' });
      }
    }
  };
  
  
  

