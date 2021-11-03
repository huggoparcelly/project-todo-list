require('dotenv').config();
const { MongoClient } = require('mongodb');

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let db = null;

const connection = () => (db
    ? Promise.resolve(db)
    : MongoClient.connect(DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

module.exports = connection;