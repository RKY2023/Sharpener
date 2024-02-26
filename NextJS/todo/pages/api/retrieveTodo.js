import { MongoClient } from "mongodb";

const retrieveTodo = (req, res) => {
    const client = MongoClient.connect(
        'mongodb+srv://xraj2023:LyfJlpM2nZlWQNh4@cluster0.i4rdwsy.mongodb.net/todos?retryWrites=true&w=majority&appName=Cluster0'
    );
    const db = client.db();
    const todoCollection =  db.collection('todos');
    const result = todoCollection.find();
    // return result;
}
export default retrieveTodo;