# Task manager API

## Sobre

<p align="justify"> Trata-se de uma API rest responsável por armazenar tarefas do usuário. Cada tarefa possui um titulo, uma descrição e um status que pode  constar como concluído, em progresso e pendente. Além disso, cada tarefa apresenta um token que deve ser usado como referência em algumas das operações da aplicação.
A API é capaz de criar novas tarefas, listar as tarefas armazenadas no banco de dados, editar e excluir tarefas. </p>

## 🛠 Tecnologias e libs utilizadas

As seguintes ferramentas foram utilizadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sequelize](https://sequelize.org/)
- [Mysql](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [node.js](https://nodejs.org/en)
- [express](https://expressjs.com/pt-br/)

## ⚙️ Instalação

Antes de iniciar, certifique-se de ter o docker e docker-compose instalados em seu computador.

1. Clone este repostório em seu computador local:

```bash
git clone git@github.com:Gui-lfm/task-manager-api.git
cd task-manager-api
```

2. Execute o Docker Compose para iniciar os serviços da aplicação:

```bash
docker-compose up -d --build
```
3. Acesse o container node gerado pelo compose:

```bash
docker exec -it api bash
```

4. Dentro do container, instale as dependências:

```bash
npm install
```
5.Execute as migrações do banco de dados para criar as tabelas necessárias:

```bash
npx sequelize db:migrate
```

6. Execute os seeders para preencher o banco de dados com dados de exemplo:

```bash
npx sequelize db:seed:all
```
7. Por fim, inicie a api com o nodemon

```bash
npm run dev
```
O servidor agora deve estar em execução em http://localhost:3001

## ↗️ Endpoints

### /task

- Utilizando o método GET:
  - Retorna um JSON com todas as tarefas armazenadas no banco de dados;
  - É possível filtrar as tarefas pelo seu status, mostrando somente as concluídas, em andamento ou pendentes utilizando query strings ex: ```task?status=concluída```

- Utilizando o método POST:
  - Deve inserir uma tarefa no banco de dados. Para que a requisição ocorra, deve estar presente no corpo da requisição os campos title, description e status, todos do tipo string;
  - Caso algum do campos solicitados não estejam presentes, retorna um erro de código 400;
  - Caso a inserção ocorra com sucesso, retorna o código 201 junto da tarefa inserida no banco de dados e um token que deve ser utlizado nas operações de edição e remoção da tarefa criada.
  - O corpo da requisição deverá seguir o formato abaixo:
  
  ```json
  {
  "title": "Faxina",
  "description": "limpeza semanal da casa",
  "status": "concluída"
  }
  ```

### /task/:id

- Utilizando o método PATCH:
  - Responsável por editar uma tarefa existente no banco de dados;
  - A tarefa editada será correspondente ao id especificado no parâmetro da URL;
  - Além disso, o usuário também deve informar o token correspondente nos headers da aplicação;
  - Caso o token não esteja presente ou não seja válido, retorna um erro de código 401;
  - Caso o id especificado não corresponda a nenhuma tarefa, retorna um erro de código 404;
  - Caso os campos de edição não estejam presentes, retorna um erro de código 400;
  - Em caso de sucesso, retorna o código 200 junto da tarefa editada.
  - O corpo da requisição deve possuir o seguinte formato:
  
  ```json
  {
  "description": "limpeza quinzenal da casa",
  "status": "em andamento"
  }
  ```

- Utilizando o método DELETE:
  - Responsável por remover uma tarefa existente no banco de dados;
  - A tarefa deletada será correspondente ao id especificado no parâmetro da URL;
  - Além disso, o usuário também deve informar o token correspondente nos headers da aplicação;
  - Caso o token não esteja presente ou não seja válido, retorna um erro de código 401;
  - Caso o id especificado não corresponda a nenhuma tarefa, retorna um erro de código 404;
  - Em caso de sucesso, retorna o código 204.
