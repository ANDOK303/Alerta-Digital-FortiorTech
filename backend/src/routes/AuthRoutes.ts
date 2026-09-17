import { Router } from 'express';
import { login } from '../controllers/AuthController';
import { registrar } from '../controllers/RegisterController';

const router = Router();

router.post('/login', login);
router.post('/register', registrar);

export default router;