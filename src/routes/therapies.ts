import { Router } from 'express';
import { getAllTherapies } from '../controllers/therapyController';
const router = Router();

router.get('/', getAllTherapies);

export default router;
