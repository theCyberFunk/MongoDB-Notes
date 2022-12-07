const express = require("express");
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;

// Connection URL
const url = process.env.MONGO_URL;
const client = new MongoClient(url);

const dbName = "live";
client.connect();
console.log("Connected successfully to server");
const db = client.db(dbName);
const areas = db.collection("Area");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let query = await areas.find({}).toArray();
  // console.log(query);
  res.json(query);
  // res.render("index", { title: "Express" });
});

module.exports = router;
