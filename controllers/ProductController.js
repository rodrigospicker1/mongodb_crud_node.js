const Product = require('../models/Product')


module.exports = class ProductController{
    static showProducts(req, res){
        res.render('products/all')
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static createProductPost(req, res){
        const name = req.body.name
        let price = req.body.price
        const description = req.body.description
        
        
        //Máscara price
        price = price.replace('R','');
        price = price.replace('$','');
        price = price.replace('.','');
        price = price.replace(',','.');
        price = price.replace(' ','');
        
        const product = new Product(name, price, description)

        product.save()

        res.redirect('/products')
    }
}