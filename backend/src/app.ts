import express from 'express';
import authRoutes from './routes/AuthRoutes';
import homeRoutes from './routes/HomeRoutes';
import pruebasRoutes from './routes/PruebasRoutes';
import publicacionesRoutes from './routes/PublicacionesRoutes';
import calificacionesRoutes from './routes/CalificacionesRoutes';
import { pool } from './config/database';
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/pruebas', pruebasRoutes);
app.use('/api/publicaciones', publicacionesRoutes);
app.use('/api/calificaciones', calificacionesRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Alerta Digital funcionando' });
});

// Conexion a mySQL
app.listen(PORT, async () => {
  console.log('Servidor corriendo en el puerto ' + PORT);

  try {
    await pool.query('SELECT 1');
    console.log('Conexión a MySQL exitosa');
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
  }
});