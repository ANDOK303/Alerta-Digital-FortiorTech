import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
  const { correo_electronico, contrasena } = req.body;

  if (!correo_electronico || !contrasena) {
    return res.status(400).json({ exito: false, mensaje: 'Correo y contraseña son requeridos' });
  }

  const resultado = await authService.login(correo_electronico, contrasena);

  if (!resultado.exito) {
    return res.status(401).json(resultado);
  }

  res.status(200).json(resultado);
};