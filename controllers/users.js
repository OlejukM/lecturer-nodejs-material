const userService = require("../services/users");

let users = [];

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = users.filter((user) => user.id === +id);

  res.send(user);
};

const getAllUsers = (req, res) => {
  const result = userService.sum(1, 2);
  console.log(result);
  res.send(users);
};

const addUser = (req, res) => {
  const { user } = req.body;
  const parsedUser = JSON.stringify(user);

  users.push(user);
  res.send(`User ${parsedUser} was successfully saved!`);
};

const editUser = (req, res) => {
  const { id } = req.params;
  const { user } = req.body;

  users = users.map((existingUser) =>
    existingUser.id === +id ? user : existingUser
  );
  res.send(user);
};

const deleteUserById = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== +id);
  res.send("Deleted!");
};

const deleteAllUsers = (req, res) => {
  users = [];

  res.send(users);
};
//In simple terms, a module is code that we group together for the purposes of sharing and reuse.

//TELL ABOUT SERVICE REUSABLE FUNCTIONS
module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  editUser,
  deleteUserById,
  deleteAllUsers,
};
