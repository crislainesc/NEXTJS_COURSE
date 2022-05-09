import {MongoClient} from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://user:AQjLGPFB5cLgy66D@cluster0.45q47.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );

    return client;
}
