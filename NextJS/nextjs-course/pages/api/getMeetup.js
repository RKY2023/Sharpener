import { MongoClient } from 'mongodb';

async function getMeetup (req, res) {
//   if(req.method === 'GET'){
    // const data = req.body;
    
    // const { title, image, address, description } = data;
    const client = await MongoClient.connect(
        'mongodb+srv://xraj2023:LyfJlpM2nZlWQNh4@cluster0.i4rdwsy.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    client.close();
    // return result.toArray();
    // res.status();

//   };
};
export default getMeetup;