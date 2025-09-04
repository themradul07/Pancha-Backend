
import { Request, Response } from 'express';
import Booking from '../models/Booking';

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
