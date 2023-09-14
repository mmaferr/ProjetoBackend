const express = require("express");     /*chamando a biblioteca express, o required é o método antigo para chamar a biblioteca*/ 
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();      /*variável app tem muitos de express*/ 
const port = 3903;      /*inicia a porta do servidor*/

app.get("/", (req, res) => {   //criando um endingpoint, entre parenteses o endereço que é o raíz. dentro de app. get 2 parametros req: requisição res:reposta. a setinha indica que é uma função
    res.send("Hello World!");   //quando digitar o endereço desse servidor, irá aparecer esse hello world
});

app.listen(port, () => {
    console.log(`Servidor online na porta ${port}`);
});
/*liga a porta do servidor, essa função () irá retornar que o servidor online na porta, deu tudo certo*/
