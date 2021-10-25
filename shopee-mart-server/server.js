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
			console.log(req.query);

			const cursor = itemsCollection.find({});

			const page = req.query.page;
			const size = parseInt(req.query.size);

			const count = await cursor.count();
			let products;

			if (page) {
				products = await cursor
					.skip(page * size)
					.limit(size)
					.toArray();
			} else {
				products = await cursor.toArray();
			}

			// const result = await itemsCollection.insertOne(products);
			// console.log(`A document was inserted with the _id: ${result.insertedId}`);
			res.send({ count, products });
		});

		// use post to get data by keys
		app.post('/products/bykeys', async (req, res) => {
			const keys = req.body;
			const query = { key: { $in: keys } };
			const products = await itemsCollection.find(query).toArray();
			console.log(req.body);
			// res.send('Hitting the post api');
			res.json(products);
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
