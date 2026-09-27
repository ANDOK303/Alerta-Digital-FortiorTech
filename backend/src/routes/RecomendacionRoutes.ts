import { Router } from 'express';
import { RecomendacionController } from '../controllers/RecomendacionController';

const router = Router();
const controller = new RecomendacionController();

router.get('/', controller.obtenerTodas);
router.post('/', controller.crear);

export default router;