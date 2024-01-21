/* Call all needed library */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const axios = require("axios");
const pool = require("./database/db");

/* Set port number to connect server with client */
const port = process.env.PORT || 5000;

/* Initialize express js */
const app = express();

/* Usage the library */
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* Set a path between client and server */
app.use(express.static(path.join(__dirname, "client/build")));

/* Routes */

/* CRUD Operators */

// CREATE
app.post("/todos", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *;",
      [description]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

// READ
app.get("/todos", async (req, res) => {
  try {
    const allTodo = await pool.query("SELECT * FROM todo;");
    res.json(allTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1;", [
      id,
    ]);
    res.json(todo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// UPDATE
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2;",
      [description, id]
    );

    res.json("Update Completed");
  } catch (err) {
    console.error(err.message);
  }
});

// DELETE
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1;",
      [id]
    );

    res.json("Delete Completed");
    // res.json(deleteTodo.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

/* Listen to initial port */
app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
