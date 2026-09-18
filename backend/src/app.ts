import express from 'express';
import authRoutes from './routes/AuthRoutes';
import homeRoutes from './routes/HomeRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/home', homeRoutes);

app.get('/', (req, res) => {
  res.json({ mensaje: 'API Alerta Digital funcionando' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});