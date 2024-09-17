const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
let transactionArr = [];

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json({
    type: '*/*'
}));

app.use(cors());

app.get('/transactions', (req, res) => {
    console.log('estoy ejecutandome mira la consola');
    res.send( JSON.stringify(transactionArr));
})

app.post('/transactions',(req,res) => {
    let transaction = req.body;
    console.log('metodo post funcionando');
    transactionArr.push(transaction)
    res.send(JSON.stringify ('guardada'))
    console.log(transactionArr);
})

app.listen(port, () => {
    console.log(`estoy ejecutandome ${port}`);
})