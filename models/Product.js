const conn = require('../db/conn')

const {MongoClient} = require('mongodb')

const uri = "mongodb://127.0.0.1:27017/testemongodb"

const client = new MongoClient(uri)

class Product {

    constructor(name, price, description){

        this.name = name
        this.price = price
        this.description = description

    }

    save(){

        const product = client.db().collection('products').insertOne({
            name: this.name,
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