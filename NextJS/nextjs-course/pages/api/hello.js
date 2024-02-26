// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   res.status(200).json({ name: 'John Doe' })
// }

import { MongoClient } from 'mongodb';

async function myapi (req, res) {
  if(req.method === 'POST'){
    const data = req.body;
    // 
    
    const { title, image, address, description } = data;
    const client = await MongoClient.connect('mongodb+srv://xraj2023:LyfJlpM2nZlWQNh4@cluster0.i4rdwsy.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);
    
    console.log(result);

    client.close();
    res.status();

  };
};
export default myapi;