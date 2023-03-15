const {MongoClient} = require('mongodb')

const uri = "mongodb://127.0.0.1:27017/testemongodb"

const client = new MongoClient(uri)

function run(){
        client.connect()
        console.log('Conectado ao MongoDB!')
}

run()
module.exports = client