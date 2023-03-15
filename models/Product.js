const conn = require('../db/conn')
const { ObjectId } = require('mongodb');

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
            id: Math.floor(Date.now() * Math.random()).toString(36),
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

    static async getProductById(id){
        const product = await conn.db().collection('products').findOne({id: id})
        return product
    }

    static async removeProductById(id){
        await conn.db().collection('products').deleteOne({id: id})
        return 
    }

    updateProduct(id){
        conn.db().collection('products').updateOne({id: id}, {$set: this})
        return 
    }

}

module.exports = Product