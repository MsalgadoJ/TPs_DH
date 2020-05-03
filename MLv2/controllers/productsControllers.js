const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".") ;

var productsControllers = {
    index: function(req,res){
        var product = products.find(seleccionado =>{
            return seleccionado.id == req.params.id;
            
        });

        let title = 'Mercado Liebre Argentina ↑ ' + product.name
        res.render('products',{
            title: title,
            aMiles: toThousand,
            product: product
        })
    }
}

module.exports = productsControllers;