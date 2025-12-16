import dotenv from 'dotenv';
import express from 'express';
import filmeRoutes from './filmeRouter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/', filmeRoutes);

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
});