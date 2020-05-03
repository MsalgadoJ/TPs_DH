const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		res.render('products',{
			title: 'Mercado Liebre Argentina',
			aMiles: toThousand,
			products: products
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let product = products.find(buscado =>{
			return buscado.id == req.params.productId;
		});
		
		let title = 'Mercado Liebre Argentina | ' + product.name;
		
		res.render('detail',{
			title: title,
			aMiles:toThousand,
			product: product
		});
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productsLeft = products.filter(function(producto){
			return producto.id != req.params.productId;
		});

		let updatedProductsJSON = JSON.stringify(productsLeft);
		fs.writeFileSync(productsFilePath,updatedProductsJSON);
		res.send(productsLeft)
	}
};

module.exports = controller;