import express from 'express';
import authRoutes from './routes/AuthRoutes';
import homeRoutes from './routes/HomeRoutes';
import { pool } from './config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);

app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Error al consultar usuarios' });
  }
});

app.listen(PORT, async () => {
  console.log('Servidor corriendo en el puerto ' + PORT);

  try {
    await pool.query('SELECT 1');
    console.log('Conexión a MySQL exitosa');
  } catch (error) {
    console.error('Error al conectar a MySQL:', error);
  }
});