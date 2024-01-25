const { MongoClient } = require("mongodb");
const { dbConstants } = require("../constants/db.constants");
const client = new MongoClient(dbConstants.uri);

const connecToDb = async () => {
  await client.connect();
  console.log("Connected successfully to database");
  const db = client.db(dbConstants.dbName);
  return db;
};

module.exports = { connecToDb };
