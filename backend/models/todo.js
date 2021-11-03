const connection = require('./connection');

const DB_NAME = process.env.DB_NAME || 'todo_list';

const getTasks = async () => {
  const db = await connection();
  return db.collection(DB_NAME).find().toArray();
};

module.exports = { 
  getTasks,
}