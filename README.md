# Unifecaf Flix API

Uma API REST simples para gerenciamento de filmes, desenvolvida com Node.js, Express e Prisma.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação de APIs REST.
- **Prisma**: ORM para interação com o banco de dados.
- **MySQL**: Banco de dados relacional.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- MySQL instalado e configurado
- npm ou yarn

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/alexadson/unifecaf_flix.git
   cd unifecaf-flix-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure o banco de dados:
   - Crie um banco de dados MySQL.
   - Atualize o arquivo `.env` com a URL do banco de dados:
     ```
     DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
     ```

4. Execute as migrações do Prisma:
   ```bash
   npx prisma migrate dev
   ```

## Uso

Para iniciar o servidor:
```bash
npm start
```

O servidor será executado na porta 3000 (ou a definida na variável `PORT` no `.env`).

## Endpoints da API

### Listar todos os filmes
- **GET** `/v1/controle-filmes/filme`
- Retorna uma lista de todos os filmes.

### Obter filme por ID
- **GET** `/v1/controle-filmes/filme/:id`
- Retorna os detalhes de um filme específico.

### Filtrar filmes
- **GET** `/v1/controle-filmes/filtro/filme`
- Permite filtrar filmes (implementação específica no controlador).

## Estrutura do Projeto

```
unifecaf-flix-api/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── db.js
│   ├── filmeController.js
│   ├── filmeModel.js
│   ├── filmeRouter.js
│   └── server.js
├── .env
├── package.json
├── db.sql
└── README.md
```

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está sob a licença MIT.