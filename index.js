const express = require('express')
const uuid = require('uuid')

const app = express()
app.use(express.json())

const port = 3001

const orders = [] // Armazena os pedidos

/* MIDDLEWARE CHECK - Vai receber o ID e verificar se ele existe. 
Caso não existir vai enviar uma mensagem de erro, mas se existir a requisição será continuada. */
const checkOrder = (request, response, next) => {
    const { id } = request.params

    const index = orders.findIndex(order => order.id === id)

    if (index < 0){
        return response.status(404).json({ error: "User not found" })
    }

    request.orderIndex = index
    request.orderId = id

    next()
}

/* MIDDLEWARE METHOD - Ele mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição. */
const method = (request, response, next) => {
    const method = request.method
    const url = request.path
    console.log("Method:", "[", method, "]", "-", "URL:", url)

    next()
}

// GET /order: Rota que lista todos os pedidos já feitos.
app.get('/order', method, (request, response) => {

    return response.status(200).json(orders)
})

// GET /order/:id: Essa rota recebe o id nos parâmetros e retorna um pedido específico.
app.get('/order/:id', checkOrder, (request, response) => {

    const index = request.orderIndex

    orderSpecific = orders[index] 

    return response.json(orderSpecific)
})

// POST /order: A rota recebe o pedido do cliente, o nome do cliente e o valor do pedido, elas são passadas dentro do corpo(body) da requisição, e são colocadas dentro de um array.
app.post('/order', method, (request, response) => {
    
    const { list, clientName, price } = request.body;

    const orderList = { 
        id: uuid.v4(), 
        list, 
        clientName, 
        price,
        status: "Em preparação" 
    }

    orders.push(orderList)

    return response.status(201).json(orderList)
})

// PUT /order/:id: Essa rota altera um pedido já feito.
app.put('/order/:id', checkOrder, method, (request, response) => {
    const id = request.orderId
    const { list, clientName, price } = request.body;


    const userChange = { 
        id,
        list, 
        clientName, 
        price,
        status: "EM PREPARAÇÃO" 
    }

    const index = request.orderIndex

    orders[index] = userChange

    return response.status(200).json(userChange)

})

// DELETE /order/:id: Essa rota deleta um pedido já feito com o id enviado nos parâmetros da rota.
app.delete('/order/:id', checkOrder, method, (request, response) => {

    const index = request.orderIndex

    orders.splice(index, 1)

    return response.status(204).json()
})

// PATCH /order/:id: Essa rota recebe o id nos parâmetros e assim que ela for chamada, altera o status do pedido recebido pelo id para "Pronto".
app.patch('/order/:id', checkOrder, method, (request, response) => {

    const index = request.orderIndex
    const { id, list, clientName, price } = orders[index]
    const changeOrderStatus = { 
        id, 
        list, 
        clientName, 
        price, 
        status: "PRONTO"
    }
    orders[index] = changeOrderStatus
    
    return response.json(changeOrderStatus)

})

app.listen(port, () =>{
    console.log(`🚀 Server started on port ${port}`)
})

/* 
Pedido pronto para facilitar.

{
    "order": "Cheeseburguer, Balde de nugget, 1 Água",
    "clientName": "Francisco", 
    "price": 37.5
}
*/