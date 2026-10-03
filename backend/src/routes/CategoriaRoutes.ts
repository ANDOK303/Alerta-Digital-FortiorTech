import { Router } from 'express';
import { CategoriaController } from '../controllers/CategoriaController';

class CategoriaRoutes {
    public router: Router = Router();
    private controller: CategoriaController = new CategoriaController();

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

const categoriaRoutes = new CategoriaRoutes();
export default categoriaRoutes.router;