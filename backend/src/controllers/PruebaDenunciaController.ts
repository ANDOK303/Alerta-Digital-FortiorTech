import { Request, Response } from 'express';
import { PruebaDenunciaService } from '../services/PruebaDenunciaService';

export class PruebaDenunciaController {
  private service = new PruebaDenunciaService();

  obtenerTodas = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.listar();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener pruebas de denuncia' });
    }
  };

  obtenerPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const item = await this.service.buscarPorId(id);
      if (!item) return res.status(404).json({ mensaje: 'Prueba no encontrada' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la prueba' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const id = await this.service.crear(req.body);
      res.status(201).json({ mensaje: 'Prueba creada', id_prueba: id, ...req.body });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la prueba' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await this.service.actualizar(id, req.body);
      if (!actualizado) return res.status(404).json({ mensaje: 'Prueba no encontrada' });
      res.status(200).json({ mensaje: 'Prueba actualizada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la prueba' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const eliminado = await this.service.eliminar(id);
      if (!eliminado) return res.status(404).json({ mensaje: 'Prueba no encontrada' });
      res.status(200).json({ mensaje: 'Prueba eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la prueba' });
    }
  };
}