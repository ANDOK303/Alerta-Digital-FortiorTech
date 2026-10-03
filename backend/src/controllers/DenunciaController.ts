import { Request, Response } from 'express';
import { DenunciaRepository } from '../repositories/DenunciaRepository';

export class DenunciaController {
  private repo = new DenunciaRepository();

  obtenerTodas = async (_req: Request, res: Response) => {
    try {
      const data = await this.repo.obtenerTodas();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las denuncias' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const id = await this.repo.crear(req.body);
      res.status(201).json({ mensaje: 'Denuncia registrada', id_denuncia: id, ...req.body });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al registrar la denuncia' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const actualizado = await this.repo.actualizar(id, req.body);
      if (!actualizado) return res.status(404).json({ mensaje: 'Denuncia no encontrada' });
      res.status(200).json({ mensaje: 'Denuncia actualizada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la denuncia' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const eliminado = await this.repo.eliminar(id);
      if (!eliminado) return res.status(404).json({ mensaje: 'Denuncia no encontrada' });
      res.status(200).json({ mensaje: 'Denuncia eliminada correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la denuncia' });
    }
  };
}