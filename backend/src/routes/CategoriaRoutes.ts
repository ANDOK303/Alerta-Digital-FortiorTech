import { Router } from 'express';
import { CategoriaController } from '../controllers/CategoriaController';

const router = Router();
const controller = new CategoriaController();

router.get('/', controller.obtenerTodas);
router.post('/', controller.crear);

export default router;