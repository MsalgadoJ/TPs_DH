const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: function(req,res){
        let visitados = products.filter(function(producto){
            return producto.category == "visited";
        });

        let ofertas = products.filter(function(producto){
            return producto.category == "in-sale";
		});
		
		console.log(visitados);
		
        res.render('index',{
            title: 'Merado Liebre Argentina',
            aMiles: toThousand,
            visitados: visitados,
            ofertas: ofertas
        });
	},
	
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
