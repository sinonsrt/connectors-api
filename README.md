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

### 1° - SCRIPT para população das informações de Connectors(Conectores)
- npx nestjs-command create:connector

### 2° - SCRIPT para população das informações de Users(Usuário)
- npx nestjs-command create:user

### 3° - Para iniciar o servidor (YARN ou NPM)
- start
### Exemplo: yarn start ou npm start 

### Para ter acesso as requisições de users e connectores é nescessário passar pela autenticação, utilizando o usuário padrão que foi criado através do script para população de Users
- email: godevapi@devapi.com
- senha:1234567

### Após o login é nescessário pegar o token obtido através da rota *Login* e enviar por Authorization do tipo Bearer Token ao realizar requisições para as outras rotas.


## Lucas Marchiori
