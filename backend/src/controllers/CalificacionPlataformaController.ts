import { Request, Response } from 'express';
import { CalificacionPlataformaService } from '../services/CalificacionPlataformaService';

export class CalificacionPlataformaController {
  private service = new CalificacionPlataformaService();

  obtenerTodas = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.listar();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener calificaciones' });
    }
  };

  obtenerPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const item = await this.service.buscarPorId(id);
      if (!item) return res.status(404).json({ mensaje: 'Calificación no encontrada' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la calificación' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const id = await this.service.crear(req.body);
      res.status(201).json({ mensaje: 'Calificación creada', id_calificacion: id, ...req.body });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la calificación' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await this.service.actualizar(id, req.body);
      if (!actualizado) return res.status(404).json({ mensaje: 'Calificación no encontrada' });
      res.status(200).json({ mensaje: 'Calificación actualizada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la calificación' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const eliminado = await this.service.eliminar(id);
      if (!eliminado) return res.status(404).json({ mensaje: 'Calificación no encontrada' });
      res.status(200).json({ mensaje: 'Calificación eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la calificación' });
    }
  };
}