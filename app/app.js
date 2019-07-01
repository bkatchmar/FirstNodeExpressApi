import bodyParser from "body-parser";
import express from "express";
import db from "./db/db";

// Set up the express app
var path = require("path");
const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Get Static Files
// viewed at http://localhost:8080
app.get("/angularjs", function(req, res) {
    res.sendFile(path.join(__dirname + "/front-end/index.html"));
});

// get all todos
app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: true,
    message: "todos retrieved successfully",
    todos: db
  })
});

app.post("/api/v1/todos", (req, res) => {
    if(!req.body.title) {
      return res.status(400).send({
        success: false,
        message: "Title is Required"
      });
    } else if(!req.body.description) {
      return res.status(400).send({
        success: false,
        message: "Description is Required"
      });
    }
   const todo = {
     id: db.length + 1,
     title: req.body.title,
     description: req.body.description
   }
   db.push(todo);
   return res.status(201).send({
     success: true,
     message: "ToDo Added Successfully",
     todo
   })
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});