import { Request, Response } from 'express';
import { HomeService } from '../services/HomeService';

const homeService = new HomeService();

export const obtenerHome = (req: Request, res: Response) => {
  const datos = homeService.obtenerDatosHome();
  res.status(200).json(datos);
};