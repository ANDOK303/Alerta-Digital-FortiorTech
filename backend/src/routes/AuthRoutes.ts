import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

class AuthRoutes {
    public router: Router = Router();
    private controller: AuthController = new AuthController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.post('/login', this.controller.login);
        this.router.post('/registro', this.controller.registro);
    }
}

const authRoutes = new AuthRoutes();
export default authRoutes.router;