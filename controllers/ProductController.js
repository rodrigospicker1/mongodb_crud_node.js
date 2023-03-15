const Product = require('../models/Product')


module.exports = class ProductController{
    static async showProducts(req, res){
        const products = await Product.getProducts()
        res.render('products/all', {products})
    }

    static createProduct(req, res){
        res.render('products/create')
    }

    static createProductPost(req, res){
        let name = req.body.name
        let price = req.body.price
        let image = req.body.image
        let description = req.body.description
        
        
        //Máscara price
        price = price.replace('R','');
        price = price.replace('$','');
        price = price.replace('.','');
        price = price.replace(',','.');
        price = price.replace(' ','');
        
        const product = new Product(name, image, parseFloat(price), description)

        product.save()

        res.redirect('/products')
    }

    static async getProduct(req, res){
        const id = req.params.id
        const product = await Product.getProductById(id)

        res.render('products/product', {product})
    }
    
}
