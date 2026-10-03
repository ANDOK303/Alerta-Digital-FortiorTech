import { Router } from 'express';
import { DenunciaController } from '../controllers/DenunciaController';

const router = Router();
const controller = new DenunciaController();

router.get('/', controller.obtenerTodas);
router.post('/', controller.crear);
router.put('/:id', controller.actualizar);
router.delete('/:id', controller.eliminar);

export default router;  