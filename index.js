// Importamos los modulos necesarios
const express = require('express');

// Iniciamos la app
const app = express();

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Método get
app.get('/', (req, res) => {
    res.send({'Prueba': 'exitosa'});
    console.log("recibido");
});

// Método post
app.post('/', (req, res) => {
    let jsonResponse = {};
    if(req.body.queryResult.action == "suma") {
        let num1 = parseFloat(req.body.queryResult.parameters.number1);
        let num2 = parseFloat(req.body.queryResult.parameters.number2);
        let sum = num1 + num2;
        let result = num1 + " + " + num2 + " = " + sum;
        
        jsonResponse = {
            "fulfillmentText": "This is a text response",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      result
                    ]
                  }
                }
              ]
        };
    } else if(req.body.queryResult.action == "resta") {
        let num1 = parseFloat(req.body.queryResult.parameters.number1);
        let num2 = parseFloat(req.body.queryResult.parameters.number2);
        let resta = num1 - num2;
        let result = num1 + " - " + num2 + " = " + resta;
        
        jsonResponse = {
            "fulfillmentText": "This is a text response",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      result
                    ]
                  }
                }
              ]
        };
    } else if(req.body.queryResult.action == "multiplicacion") {
        let num1 = parseFloat(req.body.queryResult.parameters.number1);
        let num2 = parseFloat(req.body.queryResult.parameters.number2);
        let mult = num1 * num2;
        let result = num1 + " * " + num2 + " = " + mult;
        
        jsonResponse = {
            "fulfillmentText": "This is a text response",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      result
                    ]
                  }
                }
              ]
        };
    } else if(req.body.queryResult.action == "division") {
        let num1 = parseFloat(req.body.queryResult.parameters.number1);
        let num2 = parseFloat(req.body.queryResult.parameters.number2);
        let div = num1 / num2;
        let result;
        if(num2 == 0) {
            result = num1 + " / " + num2 + " = " + "indefinido";
        } else {
            result = num1 + " / " + num2 + " = " + div;
        }
        
        jsonResponse = {
            "fulfillmentText": "This is a text response",
            "fulfillmentMessages": [
                {
                  "text": {
                    "text": [
                      result
                    ]
                  }
                }
              ]
        };
    }
    console.log("enviado");
    res.send(jsonResponse);
});

// Puerto
const PORT = 3000 || process.env.PORT;
app.listen(PORT);
