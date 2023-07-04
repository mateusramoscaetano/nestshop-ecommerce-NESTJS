# NEST SHOP
##Um projeto utilizando NestJs e Prisma ORM.


## Pré-requisitos

- Node.js (v18.12.0)
- npm (8.19.2)
- Banco de dados (PostgreSQL)

## Configuração do Ambiente

1. Clone o repositório:
$ git clone https://github.com/mateusramoscaetano/nestshop-ecommerce-NESTJS

2. Instale as dependências:
   
$ cd nest-shop
$ npm install


3. Configure as variáveis de ambiente:
   
   Crie um arquivo `.env` na raiz do projeto e defina as variáveis de ambiente necessárias. Aqui está um exemplo:
   
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome-do-banco
JWT_SECRET=sua-chave-secreta

## Executando o Projeto

1. Execute as migrações do banco de dados:

$ npx prisma migrate dev

2. Inicie o servidor:
 
 $ npm run start


O servidor estará rodando em `http://localhost:3000`.

## Documentação da API

A documentação da API está disponível através do Swagger. Acesse o seguinte URL para visualizar a documentação e interagir com os endpoints da API: 

http://localhost:3000/api

## Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature (`git checkout -b feature/nome-da-feature`).
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um pull request no GitHub.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
