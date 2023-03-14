const conn = require('../db/conn')

class Product {

    constructor(name, price, description){

        this.name = name
        this.price = price
        this.description = description

    }

    save(){

        const product = conn.db("testemongodb").collection('products').insertOne({
            name: 'teste',
            price: 123,
            description: 'teste'
        })

        return product

    }

}

module.exports = Product