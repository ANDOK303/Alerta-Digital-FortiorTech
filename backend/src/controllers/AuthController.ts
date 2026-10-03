import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  private authService = new AuthService();

  login = async (req: Request, res: Response) => {
    try {
      const { correo_electronico, contrasena } = req.body;

      if (!correo_electronico || !contrasena) {
        return res.status(400).json({ exito: false, mensaje: 'Correo y contraseña son requeridos' });
      }

      const resultado = await this.authService.login(correo_electronico, contrasena);

      if (!resultado.exito) {
        return res.status(401).json(resultado);
      }

      res.status(200).json(resultado);
    } catch (error) {
      console.error('Error en login:', error);
      res.status(500).json({ exito: false, mensaje: 'Error interno del servidor' });
    }
  };

  registro = async (req: Request, res: Response) => {
    try {
      // Se asume que tu AuthService tiene un método de registro implementado
      const resultado = await this.authService.registro(req.body);

      if (!resultado.exito) {
        return res.status(400).json(resultado);
      }

      res.status(201).json(resultado);
    } catch (error) {
      console.error('Error en registro:', error);
      res.status(500).json({ exito: false, mensaje: 'Error interno del servidor al registrar' });
    }
  };
}