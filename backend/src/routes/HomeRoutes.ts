import { Router } from 'express';
import { obtenerHome } from '../controllers/HomeController';

const router = Router();

router.get('/', obtenerHome);

export default router;