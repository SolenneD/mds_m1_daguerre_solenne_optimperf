const Task = require("../models/Task");

exports.deleteTask = (req, res) => {
  Task.remove({ _id: req.params.taskid }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).json({ message: "Task successfully deleted" });
    }
  });
};
