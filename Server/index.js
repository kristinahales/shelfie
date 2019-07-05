require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controllers')
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;



app.use(express.json());

massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db)
})
.catch(error => console.log(error))


app.get('/api/products', ctrl.getAll);



app.listen(SERVER_PORT, () => {
    console.log(`Listening on port ${SERVER_PORT}`);
});  