import { Request, Response } from 'express';
import { PublicacionForoService } from '../services/PublicacionForoService';

export class PublicacionForoController {
  private service = new PublicacionForoService();

  obtenerTodas = async (_req: Request, res: Response) => {
    try {
      const data = await this.service.listar();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener publicaciones' });
    }
  };

  obtenerPorId = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const item = await this.service.buscarPorId(id);
      if (!item) return res.status(404).json({ mensaje: 'Publicación no encontrada' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la publicación' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const id = await this.service.crear(req.body);
      res.status(201).json({ mensaje: 'Publicación creada', id_publicacion: id, ...req.body });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la publicación' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await this.service.actualizar(id, req.body);
      if (!actualizado) return res.status(404).json({ mensaje: 'Publicación no encontrada' });
      res.status(200).json({ mensaje: 'Publicación actualizada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la publicación' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const eliminado = await this.service.eliminar(id);
      if (!eliminado) return res.status(404).json({ mensaje: 'Publicación no encontrada' });
      res.status(200).json({ mensaje: 'Publicación eliminada' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la publicación' });
    }
  };
}