const mongoose = require("mongoose");

const dbURI =
  "mongodb://bla:bla@cluster0-shard-00-00-gehek.mongodb.net:27017,cluster0-shard-00-01-gehek.mongodb.net:27017,cluster0-shard-00-02-gehek.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=false&w=majority";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models

require("../models/Task");
