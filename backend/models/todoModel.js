const { ObjectId } = require('mongodb');
const connection = require('./connection');

const DB_NAME = process.env.DB_NAME;

const getTasks = async () => {
  const db = await connection();
  return db.collection(DB_NAME).find().toArray();
};

const addTask = async (task, status, createDate) => {
  const db = await connection();
  const insertTask = await db.collection(DB_NAME).insertOne({ task, status, createDate });

};

const upTask = async (id, body) => {

  const { task, status } = body;

  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await connection();
  const updatedTask = await db.collection(DB_NAME)
    .updateOne({ _id: new ObjectId(id) }, { $set: { task, status } });

  
}

module.exports = { 
  getTasks,
  addTask,
  upTask,
}