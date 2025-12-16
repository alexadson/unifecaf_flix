import { Router } from 'express';
import { getFilmes, getFilmeById, getFilmesFiltrados } from './filmeController.js';

const router = Router();

router.get('/v1/controle-filmes/filme', getFilmes);
router.get('/v1/controle-filmes/filme/:id', getFilmeById);
router.get('/v1/controle-filmes/filtro/filme', getFilmesFiltrados);

export default router;