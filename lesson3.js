const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const port = 3000; //can be any port you wish.

let users = [];

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.filter((user) => user.id === +id);

  res.send(user);
});

app.post("/users", (req, res) => {
  const { user } = req.body;
  const parsedUser = JSON.stringify(user);

  users.push(user);
  res.send(`User ${parsedUser} was successfully saved!`);
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  users = users.map((existingUser) =>
    existingUser.id === +id ? user : existingUser
  );
  res.send(user);
});

app.delete("/users", (req, res) => {
  users = [];

  res.send(users);
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== +id);
  res.send("Deleted!");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
