# Nlw 05 - Chat em tempo real

API de conversação em tempo real, desenvolvida duranta a semana NLW#05:
* Para iniciar ;
* Busca e listagem de usuários e mensagens atraves de requisições http;
* Chat em tempo real, através do protocolo Web Socket;

Tecnologias utilizadas:
* 🛠 Node.js
* 🚀 Express
* 💈 TypeScript
* 🔧 TypeORM
* 🐬 SQLite3
* 📝 Socket.Io


Requesitos:
* Node.js - [Instalação Node.js 14](https://nodejs.org/en/), including the NPM package management tool.
* Typescript - [Instalação Typescript](https://www.typescriptlang.org/): ```yarn add typescript```.
* SQLite 3 - [Instalação Driver SQLite3](https://www.sqlite.org/download.html) ``` yarn add sqlite3 ```.


-> Use o yarn para instalar as dependências.

```bash
projeto_nlw05$ yarn add

```
-> Para startar o projeto utilize:

```bash
projeto_nlw05$  run  migrations  -> yarn typeorm migration:run

projeto_nlw05$  start local server and websocket -> yarn dev

Ready to chat as client:
* http://localhost:3333/pages/client

Ready to chat as admin:
 * http://localhost:3333/pages/admin
 
```

