import { listarTodos, buscarPorId, filtrarPorNomeOuSinopse } from './filmeModel.js';

export async function getFilmes(req, res) {
  try {
    const filmes = await listarTodos();
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar filmes' });
  }
}

export async function getFilmeById(req, res) {
  try {
    const filme = await buscarPorId(req.params.id);
    if (!filme) return res.status(404).json({ error: 'Filme não encontrado' });
    res.status(200).json(filme);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filme' });
  }
}

export async function getFilmesFiltrados(req, res) {
  try {
    const termo = req.query.nome;
    if (!termo) return res.status(400).json({ error: 'Informe o parâmetro nome' });
    const filmes = await filtrarPorNomeOuSinopse(termo);
    res.status(200).json(filmes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao filtrar filmes' });
  }
}