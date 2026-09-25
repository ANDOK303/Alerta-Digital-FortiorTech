import { Request, Response } from 'express';
import { RegisterService } from '../services/RegisterService';

const registerService = new RegisterService();

export const registrar = async (req: Request, res: Response) => {
  const { nombre_usuario, correo_electronico, contrasena } = req.body;

  if (!nombre_usuario || !correo_electronico || !contrasena) {
    return res.status(400).json({ exito: false, mensaje: 'Todos los campos son requeridos' });
  }

  const resultado = await registerService.registrar(nombre_usuario, correo_electronico, contrasena);

  if (!resultado.exito) {
    return res.status(409).json(resultado);
  }

  res.status(201).json(resultado);
};