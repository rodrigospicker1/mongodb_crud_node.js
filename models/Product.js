const conn = require('../db/conn')

const {MongoClient} = require('mongodb')

const uri = "mongodb://127.0.0.1:27017/testemongodb"

const client = new MongoClient(uri)

class Product {

    constructor(name, image, price, description){

        this.name = name
        this.price = price
        this.image = image
        this.description = description

    }

    save(){

        const product = client.db().collection('products').insertOne({
            name: this.name,
            image: this.image,
            price: this.price,
            description: this.description
        })

        return product

    }

    static getProducts(){
        const products = conn.db().collection('products').find().toArray()
        return products
    }

}

module.exports = Product