# Task manager API

## Sobre:

<p align="justify"> Trata-se de uma API rest responsável por armazenar tarefas do usuário. Cada tarefa possui um titulo, uma descrição e um status que pode  constar como concluído, em progresso e pendente. Além disso, cada tarefa apresenta um token que deve ser usado como referência em algumas das operações da aplicação. 
A API é capaz de criar novas tarefas, listar as tarefas armazenadas no banco de dados, editar e excluir tarefas. </p>

## 🛠 Tecnologias e libs utilizadas:
As seguintes ferramentas foram utilizadas na construção do projeto:

- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Sequelize](https://sequelize.org/)
- [Mysql](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [node.js](https://nodejs.org/en)
- [express](https://expressjs.com/pt-br/)

## ⚙️ Instalação
--em breve

## ↗️ Endpoints

```
/tasks
```
- Utilizando o método GET:
  - Retorna um JSON com todas as tarefas armazenadas no banco de dados;
  - soon
- Utilizando o método POST:
  - Deve inserir uma tarefa no banco de dados. Para que a requisição ocorra, deve estar presente no corpo da requisição os campos title, description e status, todos do tipo string;
  - Caso algum do campos solicitados não estejam presentes, retorna um erro de código 400;
  - Caso a inserção ocorra com sucesso, retorna o código 201 junto da tarefa inserida no banco de dados e um token que deve ser utlizado nas operações de edição e remoção da tarefa criada.
 
```
/tasks/:id
```
- Utilizando o método PATCH:
  - Responsável por editar uma tarefa existente no banco de dados;
  - A tarefa editada será correspondente ao id especificado no parâmetro da URL;
  - Além disso, o usuário também deve informar o token correspondente nos headers da aplicação;
  - Caso o token não esteja presente ou não seja válido, retorna um erro de código 401;
  - Caso o id especificado não corresponda a nenhuma tarefa, retorna um erro de código 404;
  - Caso os campos de edição não estejam presentes, retorna um erro de código 400;
  - Em caso de sucesso, retorna o código 200 junto da tarefa editada.
- Utilizando o método DELETE:
  - Responsável por remover uma tarefa existente no banco de dados;
  - A tarefa deletada será correspondente ao id especificado no parâmetro da URL;
  - Além disso, o usuário também deve informar o token correspondente nos headers da aplicação;
  - Caso o token não esteja presente ou não seja válido, retorna um erro de código 401;
  - Caso o id especificado não corresponda a nenhuma tarefa, retorna um erro de código 404;
  - Em caso de sucesso, retorna o código 204.
