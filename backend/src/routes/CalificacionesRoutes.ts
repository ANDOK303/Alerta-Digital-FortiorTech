import { Router } from 'express';
import { CalificacionPlataformaController } from '../controllers/CalificacionPlataformaController';

class CalificacionesRoutes {
    public router: Router = Router();
    private controller: CalificacionPlataformaController = new CalificacionPlataformaController();

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

const calificacionesRoutes = new CalificacionesRoutes();
export default calificacionesRoutes.router;