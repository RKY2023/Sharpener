// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
import { MongoClient } from "mongodb";

const addTodo = (req, res) => {
  if(req.method == 'POST'){
    const data = req.body;
    const client = MongoClient.connect(
      'mongodb+srv://xraj2023:LyfJlpM2nZlWQNh4@cluster0.i4rdwsy.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0'
      );
      const db = client.db();
      const todoCollection =  db.collection('todos');
      const result = todoCollection.insertOne(data);
      console.log(result);

      client.close();
      res.status();

  } 
}
export default addTodo;