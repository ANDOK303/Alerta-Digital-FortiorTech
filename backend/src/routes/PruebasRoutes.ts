import { Router } from 'express';
import { PruebaDenunciaController } from '../controllers/PruebaDenunciaController';

class PruebasRoutes {
    public router: Router = Router();
    private controller: PruebaDenunciaController = new PruebaDenunciaController();

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

const pruebasRoutes = new PruebasRoutes();
export default pruebasRoutes.router;