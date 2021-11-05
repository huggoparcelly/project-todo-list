# Boas vindas ao repositório do projeto Todo List

O código base do projeto está dividido em dois arquivos presentes nesse repositório:

No backend uma API utilizando Node.js e Express. Já o frontend foi elaborado com React.

## Backend

Considerações para instalar as dependências e colocar a API no ar.

### Requisitos necessários
* Node.js
* Servidor MongoDB rodando localmente 
> **NOTA:** As informações necessárias para conexão com o banco encontra-se no arquivo .env.example
### Instalação
* No ícone Code, baixe os arquivos fazendo um git clone ou utilizando o .zip
* Pelo terminal abra a pasta do projeto e acesse a pasta **backend**
* Crie um arquivo .env preenchendo-o como o arquivo **.env.example**
* Ainda na pasta do backend, pelo terminal, execute os seguintes comandos:
  * `npm install`
  * `npm start` (para o script de produção)
  * `npm run dev` (para o script de desenvolvimento)
Agora a API está pronta para receber requisições

### API
A API consiste em um serviço simples com alguns endpoints. 
Alguns que retornam a listagem das tarefas, outros atualização ou salvam as tarefas no banco de dados.

### Endpoints
A API apresenta cinco endpoints
* Um **GET** na rota /todo que retorna uma lista com todas as tarefas realizadas;

  ~~~
  {
    "_id": "6183ec9c665fe15ff11bdbc5",
    "task": "nova tarefa",
    "status": "em andamento",
    "createDate": "04-11-2021 11:22:20"
  }
  ~~~
 
* Um **POST** na rota /todo que cria uma nova tarefa e adiciona ao banco de dados;
* Dois **PUT** um na rota /todo/:id para atualizar uma tarefa e outro na rota /todo/:id/status que atualiza apenas o status da tarefa;
* Um **DELETE** na nota /todo/:id que deleta uma tarefa do banco de dados;

## Frontend
Trata-se de um frontend bem simples que vai se comunicar com a nossa API. Ele possui as seguintes funcionalidades:

* Uma tabela para exibição das tarefas retornadas pela API;
* Um campo para adicinar uma tarefa com seu status;
* Botões para editar e excluir uma tarefa;
* O status da tarefa também poderá ser alterado;

Todas essas funcionalidades estão divididas em alguns componetes:
* **AddTask** para adicionar uma tarefa;
* **StatusTask** para atualizar apenas o status;
* **TodoList** que renderiza a lista de tarefas e possui os botões de editar e excluir;
* **UpdateTask** para editar uma tarefa;

### Inicialização
* Pelo terminal abra a pasta do projeto e acesse a pasta **frontend**
* Para abrir a aplicação digite o comando
  * `npm start`
