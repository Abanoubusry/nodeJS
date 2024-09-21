import { MongoClient } from "mongodb";

const url = 'mongodb+srv://abanoubusry33:abanoubusry33@learn-mongo-db.w9nsukb.mongodb.net/';
const client = new MongoClient(url);

const main = async () => {
    try {
        // Connect to the database
        await client.connect();
        console.log('Connected successfully to server');

        // Choose database to interact with
        const db = client.db('abanoub');

        // Choose collection to interact with
        const collection = db.collection('courses');

        // Insert a document
        await collection.insertOne({
            "title": "new course",
            "price": 1000
        });

        // Get all documents
        const data = await collection.find().toArray();
        console.log('data', data);
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Close the connection
        await client.close();
    }

};

main();
