import { Router } from 'express';
import { getAllBookings } from '../controllers/bookingController';
const router = Router();

router.get('/', getAllBookings);

export default router;
