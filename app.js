const express = require("express");
const bodyParser = require("body-parser");
const createTask = require("./controllers/createTask.js");
const deleteTask = require("./controllers/deleteTask.js");
const listTask = require("./controllers/listTask.js");
const readTask = require("./controllers/readTask.js");
const updateTask = require("./controllers/updateTask.js");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API ENDPOINTS

app
  .route("/tasks")
  .get(listTask.listTask)
  .post(createTask.createTask);

app
  .route("/tasks/:taskid")
  .get(readTask.readTask)
  .put(updateTask.updateTask)
  .delete(deleteTask.deleteTask);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
