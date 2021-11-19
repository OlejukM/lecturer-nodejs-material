const express = require("express");
const bodyParser = require("body-parser");
//routes
const users = require("./routes/users");
// const admin = require("./routes/admin");

const app = express();

const port = 3000; //can be any port you wish.

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/users", users);
// app.use("/admin", admin);

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
