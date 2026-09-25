import { Router } from 'express';
import { PublicacionForoController } from '../controllers/PublicacionForoController';

class PublicacionesRoutes {
    public router: Router = Router();
    private controller: PublicacionForoController = new PublicacionForoController();

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

const publicacionesRoutes = new PublicacionesRoutes();
export default publicacionesRoutes.router;