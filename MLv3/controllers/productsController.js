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
		res.render('product-create-form');
	},
	
	// Create -  Method to store
	store: (req, res) => {
		//res.send(req.body)
		let newProduct = {}

		if(products == ""){
			newProduct.id=1
		}else {
			let lastProduct = products[products.length -1];
			newProduct.id = lastProduct.id+1;
		}
				
		newProduct.name = req.body.name;
		newProduct.price = req.body.price;
		newProduct.discount = req.body.discount;
		newProduct.category = req.body.category;
		newProduct.description = req.body.description;

		products.push(newProduct);

		let updatedProductsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath,updatedProductsJSON);
		
		res.render('products',{
			aMiles: toThousand,
			products: products
		})

	},

	// Update - Form to edit
	edit: (req, res) => {
		let product = products.find(buscado =>{
			return buscado.id == req.params.productId;
		});

		//console.log(product)

		let title = 'Mercado Liebre Argentina | ' + product.name;
		
		res.render('product-edit-form',{
			title: title,
			aMiles:toThousand,
			productToEdit: product
		});


	},
	// Update - Method to update
	update: (req, res) => {
		let productUpdated = {};

		products.forEach(element => {
			if(element.id == req.params.productId){
				element.name = req.body.name;
				element.price = req.body.price;
				element.discount = req.body.discount;
				element.category = req.body.category;
				element.description = req.body.description;
				return productUpdated = element;
			}

		});

		let updatedProductsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath,updatedProductsJSON);
		
		res.render('products',{
			aMiles: toThousand,
			products: products
		})
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		let productsLeft = products.filter(function(producto){
			return producto.id != req.params.productId;
		});

		let updatedProductsJSON = JSON.stringify(productsLeft);
		fs.writeFileSync(productsFilePath,updatedProductsJSON);
		
		res.render('products',{
			aMiles: toThousand,
			products: productsLeft
		})
	}
};

module.exports = controller;