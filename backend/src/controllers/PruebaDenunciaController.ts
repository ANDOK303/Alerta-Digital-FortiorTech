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
      const id = Number(req.params['id']);
      const item = await this.service.buscarPorId(id);
      if (!item) return res.status(404).json({ mensaje: 'Prueba no encontrada' });
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener la prueba' });
    }
  };

  crear = async (req: Request, res: Response) => {
    try {
      const insertId = await this.service.crear(req.body);
      res.status(201).json({ mensaje: 'Prueba de denuncia creada', id: insertId });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear la prueba' });
    }
  };

  actualizar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params['id']);
      const exito = await this.service.actualizar(id, req.body);
      if (!exito) return res.status(404).json({ mensaje: 'Registro no encontrado para actualizar' });
      res.status(200).json({ mensaje: 'Prueba actualizada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar la prueba' });
    }
  };

  eliminar = async (req: Request, res: Response) => {
    try {
      const id = Number(req.params['id']);
      const exito = await this.service.eliminar(id);
      if (!exito) return res.status(404).json({ mensaje: 'Registro no encontrado para eliminar' });
      res.status(200).json({ mensaje: 'Prueba eliminada correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar la prueba' });
    }
  };
}