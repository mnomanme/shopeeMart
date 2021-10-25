const express = require('express');

const cors = require('cors');

const { MongoClient } = require('mongodb');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 4000;

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@shopeemart.uz4v8.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
	try {
		await client.connect();
		console.log('Shopee Mart Database Connected Successfully!');
		const database = client.db('db1shopee');
		const itemsCollection = database.collection('productsItem');

		// GET PRODUCTS
		app.get('/products', async (req, res) => {
			const cursor = itemsCollection.find({});
			const products = await cursor.toArray();
			const count = await cursor.count();

			// const result = await itemsCollection.insertOne(products);
			// console.log(`A document was inserted with the _id: ${result.insertedId}`);
			res.send({ count, products });
		});
	} finally {
		// await client.close();
	}
}
run().catch(console.dir);

app.get('/', (req, res) => {
	res.send('Shoppe Mart Is Here!');
});

app.listen(4000, () => {
	console.log(`Listening The PORT ${port}`);
});
