import { Router } from 'express';
import { uploadFoto } from '../config/multer';
import { subirFoto } from '../controllers/UsuarioFotoController';

const router = Router();

router.post('/:id/foto', uploadFoto.single('foto'), subirFoto);

export default router;