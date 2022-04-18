# Dev's Burger Order with Node

<img src="./assets/img/gif.gif" alt="Gif do Teste">

## :rocket: Sobre o desafio

É uma aplicação que fará o cadastro dos pedidos de uma hamburgueria.

### Rotas

- `POST /order`: A rota recebe o `pedido do cliente`, o `nome do cliente` e o `valor do pedido`, elas são passadas dentro do corpo(body) da requisição, e são colocadas dentro de um array.


- `GET /order`: Rota que lista todos os pedidos já feitos.

- `PUT /order/:id`: Essa rota altera um pedido já feito.

- `DELETE /order/:id`: Essa rota deleta um pedido já feito com o `id` enviado nos parâmetros da rota.

- `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e retorna um pedido específico.

- `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, altera o status do pedido recebido pelo id para "Pronto".


### Exemplo

Se eu chamar a rota `POST /order` repassando `{ order: "Cheeseburguer, Balde de nugget, 1 Água", clienteName:"Cleber Rocha", price: 44.50 }`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "Cheeseburguer, Balde de nugget, 1 Água",
    clienteName:"Cleber Rocha", 
    price: 44.50,
    status:"Em preparação"
  }
];
```


Se eu chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "Cheeseburguer, Balde de nugget, 1 Água",
    clienteName:"Cleber Rocha", 
    price: 44.50,
    status:"Pronto"
  }
];
```

### Middlewares

MIDDLEWARE CHECK - Vai receber o ID e verificar se ele existe. 
Caso não existir vai enviar uma mensagem de erro, mas se existir a requisição será continuada.

MIDDLEWARE METHOD - Ele mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.

### Exemplo
Método: [GET] - URL: /order

## :rocket: Tecnologias ##

Neste projeto foram utilizadas as seguintes ferramentas:

- [Node](https://nodejs.org/en/)  
- [Express](https://expressjs.com/pt-br/)
- [Insomnia](https://insomnia.rest/products/insomnia)
- [uuid](https://www.npmjs.com/package/uuid)

## :closed_book: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciando ##

```bash
# Clone this project
$ git clone https://github.com/Kayke-Fujinaka/Dev-s-Burger-Orders
# Access
$ cd Desafio
# Install dependencies
$ npm 
# Run the project
$ npm start 
# The server will initialize in the <http://localhost:3001>
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="140px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Kayke Alves Fujinaka</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 License

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

&#xa0;

<a href="#top">Back to top</a>
