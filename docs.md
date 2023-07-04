#Endpoint: POST /users/master

##Cria um novo usuário com a role "master".

###Requisição:

#POST /users/master
Content-Type: application/json
Authorization: Bearer <access_token>

{
"email": "string",
"password": "string",
"roles": "string"
}
Resposta:

{
"id": 0,
"email": "string",
"password": "string",
"roles": {},
"createdAt": "2023-07-04T16:46:41.455Z",
"updatedAt": "2023-07-04T16:46:41.455Z"
}
#Endpoint: POST /users

##Cria um novo usuário.

###Requisição:


#POST /users
Content-Type: application/json

{
"email": "string",
"password": "string",
"roles": "string"
}
Resposta:

{
"id": 0,
"email": "string",
"password": "string",
"roles": {},
"createdAt": "2023-07-04T16:46:41.455Z",
"updatedAt": "2023-07-04T16:46:41.455Z"
}
#Endpoint: GET /users/me

##Obtém informações do usuário autenticado.

###Requisição:

#GET /users/me
Authorization: Bearer <access_token>
Resposta:

{
"sub": 0,
"email": "string",
"iat": 0,
"exp": 0
}
#Endpoint: POST /auth/login

##Realiza o login do usuário.

###Requisição:

#POST /auth/login
Content-Type: application/json

{
"email": "string",
"password": "string"
}
Resposta:

{
"access_token": "string",
"redirect": "string"
}
#Endpoint: POST /products

##Cria um novo produto.

###Requisição:

#POST /products
Content-Type: application/json
Authorization: Bearer <access_token>

{
"name": "string",
"description": "string",
"price": 0
}
Resposta:

{
"id": 0,
"name": "string",
"description": "string",
"price": 0,
"createdAt": "2023-07-04T16:52:06.843Z",
"updatedAt": "2023-07-04T16:52:06.843Z"
}
#Endpoint: GET /products

##Obtém a lista de produtos.

###Requisição:

#GET /products
Resposta:

[
{
"id": 0,
"name": "string",
"description": "string",
"price": 0,
"createdAt": "2023-07-04T16:52:06.843Z",
"updatedAt": "2023-07-04T16:52:06.843Z"
}
]
#Endpoint: GET /products/:id

##Obtém as informações de um produto específico.

###Requisição:

#GET /products/:id
Resposta:

{
"id": 0,
"name": "string",
"description": "string",
"price": 0,
"createdAt": "2023-07-04T16:52:06.843Z",
"updatedAt": "2023-07-04T16:52:06.843Z"
}
#Endpoint: PUT /products/:id

##Atualiza as informações de um produto específico.

###Requisição:

#PUT /products/:id
Content-Type: application/json
Authorization: Bearer <access_token>

{
"name": "string",
"description": "string",
"price": 0
}
Resposta:


{
"id": 0,
"name": "string",
"description": "string",
"price": 0,
"createdAt": "2023-07-04T16:54:54.814Z",
"updatedAt": "2023-07-04T16:54:54.814Z"
}
#Endpoint: DELETE /products/:id

##Exclui um produto específico.

###Requisição:

#DELETE /products/:id
Authorization: Bearer <access_token>
Resposta:

{
"id": 0,
"name": "string",
"description": "string",
"price": 0,
"createdAt": "2023-07-04T16:55:36.341Z",
"updatedAt": "2023-07-04T16:55:36.341Z"
}
#Endpoint: POST /orders

##Cria um novo pedido.

###Requisição:

#POST /orders
Content-Type: application/json
Authorization: Bearer <access_token>

{
"productsId": ["string"]
}
Resposta:

{
"id": 0,
"userId": 0,
"status": "string",
"user": {},
"products": ["string"],
"createdAt": "2023-07-04T16:56:59.729Z",
"updatedAt": "2023-07-04T16:56:59.729Z"
}
#Endpoint: GET /orders

##Obtém a lista de pedidos.

###Requisição:

#GET /orders
Authorization: Bearer <access_token>
Resposta:

[
{
"id": 0,
"userId": 0,
"status": "string",
"user": {},
"products": ["string"],
"createdAt": "2023-07-04T16:57:38.336Z",
"updatedAt": "2023-07-04T16:57:38.336Z"
}
]
#Endpoint: GET /orders/:id

##Obtém as informações de um pedido específico.

###Requisição:

#GET /orders/:id
Authorization: Bearer <access_token>
Resposta:

{
"id": 0,
"userId": 0,
"status": "string",
"user": {},
"products": ["string"],
"createdAt": "2023-07-04T16:57:59.320Z",
"updatedAt": "2023-07-04T16:57:59.320Z"
}
#Endpoint: DELETE /orders/:id

##Exclui um pedido específico.

###Requisição:

#DELETE /orders/:id
Authorization: Bearer <access_token>
Resposta:

{
"id": 0,
"userId": 0,
"status": "string",
"user": {},
"products": ["string"],
"createdAt": "2023-07-04T16:59:01.338Z",
"updatedAt": "2023-07-04T16:59:01.338Z"
}
#Endpoint: DELETE /orders/clear

##Exclui todos os pedidos.

###Requisição:

#DELETE /orders/clear
Authorization: Bearer <access_token>
Resposta:

{
"id": 0,
"userId": 0,
"status": "string",
"user": {},
"products": ["string"],
"createdAt": "2023-07-04T16:59:10.077Z",
"updatedAt": "2023-07-04T16:59:10.077Z"
}
