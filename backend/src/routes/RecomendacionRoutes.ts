import { Router } from 'express';
import { RecomendacionController } from '../controllers/RecomendacionController';

class RecomendacionRoutes {
    public router: Router = Router();
    private controller: RecomendacionController = new RecomendacionController();

    constructor() {
        this.config();
    }

    private config(): void {
        this.router.get('/', this.controller.obtenerTodas);
        this.router.get('/:id', this.controller.obtenerPorId);
        this.router.post('/', this.controller.crear);
        this.router.put('/:id', this.controller.actualizar);
        this.router.delete('/:id', this.controller.eliminar);
    }
}

const recomendacionRoutes = new RecomendacionRoutes();
export default recomendacionRoutes.router;