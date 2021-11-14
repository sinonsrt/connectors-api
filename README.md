# PROJETO GO DEV API - BACK-END
### Banco de dados - MONGODB - Com conexão via cluster Atlas MongoDB Cloud
### ORM - Mongoose

## ENTIDADES
### Users - Usuários
- name: string
- email: string
- password: string

### Connectors - Conectores
- name: string
- type: string
- privacy: string
- base_url: string
- logo_url: string
- category: string
- description: string
- status: string

## Iniciado o projeto - Ordem de comandos(Executar comandos em ordem para inicio do projeto)

### 1° - Para realizar a instalação das dependências da aplicação
- install
- npm install ou yarn install

### 2° - SCRIPT para população das informações de Connectors(Conectores)
- npx nestjs-command create:connector

### 3° - SCRIPT para população das informações de Users(Usuário)
- npx nestjs-command create:user

## Para iniciar o servidor 

### Para iniciar o servidor em sua máquina local (YARN ou NPM)
- start
- exemplo: yarn start ou npm start

#### Exemplo: yarn start ou npm start 

### Caso deseje realizar a criação de uma imagem e subir um container através do Docker (Docker)
- docker-compose up

### Para ter acesso as requisições de users e connectores é necessário passar pela autenticação, utilizando o usuário padrão que foi criado através do script para a criação de um usuário padrão
- email: godevapi@devapi.com
- senha:1234567

#### Após o login é nescessário pegar o token obtido através da rota *Login* e enviar por Authorization do tipo Bearer Token ao realizar requisições para as outras rotas.

## Testes automatizados(controllers) - utilize o script a seguir para realizar o teste automatizado
- npm run test

## Lucas Marchiori
