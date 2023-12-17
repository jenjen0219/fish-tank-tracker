const MongoClient = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

const connectToDatabase = async (url,dbName) => {
    const client = await MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology:true});

    return client.db(dbName);
};

module.exports = connectToDatabase;