import prisma from './db.js';

export async function listarTodos() {
  return await prisma.filme.findMany();
}

export async function buscarPorId(id) {
  return await prisma.filme.findUnique({
    where: { id: parseInt(id) }
  });
}

export async function filtrarPorNomeOuSinopse(termo) {
  return await prisma.filme.findMany({
    where: {
      OR: [
        { nome: { contains: termo } },
        { sinopse: { contains: termo } }
      ]
    }
  });
}