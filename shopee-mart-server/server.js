const express = require('express');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@shopeemart.uz4v8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

const port = 4000;

app.get('/', async (req, res) => {
	res.send('Shoppe Mart Is Here!');
});

app.listen(port, () => {
	console.log(`Listening The PORT ${port}`);
});
