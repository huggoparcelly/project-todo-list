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

module.exports = { 
  getTasks,
  addTask,
}