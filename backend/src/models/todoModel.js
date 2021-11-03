const { ObjectId } = require('mongodb');
const connection = require('./connection');

const DB_NAME = process.env.DB_NAME;

const getTasks = async () => {
  const db = await connection();
  return db.collection(DB_NAME).find().toArray();
};

const addTask = async (task, status, createDate) => {
  const db = await connection();
  await db.collection(DB_NAME).insertOne({ task, status, createDate });
};

const findTaskById = async (id) => {
  
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const db = await connection();
  const task = await db.collection(DB_NAME).findOne({ _id: new ObjectId(id) });
  if (!task) return null;

  return task;
}

const upTask = async (id, body) => {

  const { task, status } = body;

  const updatedTask = await findTaskById(id);
  if(!updatedTask) return null;

  const db = await connection();
   await db.collection(DB_NAME)
    .updateOne({ _id: new ObjectId(id) }, { $set: { task, status } });

  return updatedTask;
}

const removeTask = async (id) => {
  const removedTask = await findTaskById(id);
  if(!removedTask) return null;

  const db = await connection();
  await db.collection(DB_NAME).deleteOne({ _id: new ObjectId(id) });

  return removedTask;
}

module.exports = { 
  getTasks,
  addTask,
  upTask,
  removeTask,
}