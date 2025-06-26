# uTask time - Gerenciador de Tarefas (React + Node.js) 📝

![Licença](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-concluído-green.svg)
![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)

**uTask time** é um gerenciador de tarefas (To-Do List) construído com as tecnologias mais modernas do ecossistema JavaScript. O projeto foi desenvolvido durante o programa de trainee da **UNECT Jr**, e o prefixo **'u'** em **'uTask'** é uma homenagem à empresa júnior.

O frontend foi desenvolvido com **React.js** para uma interface de usuário reativa e dinâmica, enquanto o backend utiliza **Node.js** com **Express** para criar uma API RESTful robusta e eficiente para gerenciar as tarefas.

###  Autores

Desenvolvido por [Fábio Leonam](https://github.com/FabioLeonam) e [Jéssica Leme Freitas](https://github.com/jekkaleeme).

### Organização

Este projeto é um resultado do programa de trainee da **UNECT Jr - Empresa Júnior de Computação**.

## ✨ Funcionalidades

| Status      | Funcionalidade            | Descrição                                                     |
| :---------- | :------------------------ | :------------------------------------------------------------ |
| ✔️ Concluído | **Criação de Tarefas**    | Permite que o usuário adicione novas tarefas com título e descrição. |
| ✔️ Concluído | **Listagem de Tarefas**   | Exibe todas as tarefas cadastradas, separando visualmente as concluídas. |
| ✔️ Concluído | **Marcar como Concluída** | Altera o status de uma tarefa de pendente para concluída.    |
| ✔️ Concluído | **Exclusão de Tarefas**   | Remove permanentemente uma tarefa da lista.                  |
| ✔️ Concluído | **Edição de Tarefas**     | Permitirá a alteração do título ou descrição de uma tarefa existente. |
| ⏳ Em Breve  | **Design Responsivo**     | A interface se adapta para uma ótima experiência em desktops e celulares. |
| ⏳ Em Breve  | **Filtros Avançados**     | Opções para filtrar a visualização de tarefas por status.     |

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

### **Frontend (Cliente)**

-   **React.js**: Biblioteca para construção da interface de usuário.
-   **Axios**: Cliente HTTP para realizar requisições à API.
-   **Styled-Components**: Para estilização dos componentes de forma isolada e dinâmica.

### **Backend (Servidor)**

-   **Node.js**: Ambiente de execução JavaScript no servidor.
-   **Express.js**: Framework para criação da API RESTful.
-   **CORS**: Middleware para permitir requisições entre o frontend e o backend.
-   **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.
-   **MongoDB** (com **Mongoose**): Banco de dados NoSQL para persistência das tarefas.

## 🚀 Como Instalar e Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente local.

### **Pré-requisitos**

Antes de começar, você vai precisar ter instalado em sua máquina:
-   [Node.js](https://nodejs.org/en/) (v16 ou superior)
-   [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
-   [Git](https://git-scm.com/)
-   Uma instância do [MongoDB](https://www.mongodb.com/) rodando (localmente ou na nuvem, como o MongoDB Atlas).

### **1. Clone o Repositório**

```bash
git clone https://github.com/FabioLeonam/uTask-time2
cd uTask-time2
```

### **2. Configurando o Backend (Servidor)**

```bash
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env na raiz da pasta 'backend' a partir do .env.example
# Preencha com suas variáveis de ambiente.
# Exemplo de .env:
# DATABASE_URL="mongodb://localhost:27017/utask"
# PORT=3333

# Inicie o servidor de desenvolvimento
npm run dev
```
O servidor backend estará rodando em `http://localhost:3333`.

### **3. Configurando o Frontend (Cliente)**

Abra um **novo terminal** na raiz do projeto.

```bash
# Navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm run dev
```
A aplicação frontend estará rodando em `http://localhost:5173` (ou outra porta indicada pelo Vite) e fará requisições para o backend.

## 📋 Endpoints da API

A API RESTful segue os seguintes endpoints:

| Método | Rota         | Descrição                                         | Corpo da Requisição (Exemplo)                  |
| :----- | :----------- | :------------------------------------------------ | :------------------------------------------    |
| `GET`  | `/tasks`     | Lista todas as tarefas.                           | -                                              |
| `POST` | `/tasks`     | Cria uma nova tarefa.                             | `{ "taskText": "Apresentar projeto trainee" }` |
| `PUT`  | `/tasks/:id` | Atualiza uma tarefa (ex: marcar como concluída).  | `{ "taskStatus": "concluída" }`                |
| `DELETE`| `/tasks/:id` | Deleta uma tarefa específica.                     | -                                             |

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.