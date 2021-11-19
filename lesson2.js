const express = require("express");
const app = express();

const fs = require("fs");

//show application.js from off docs on github!

const port = 3000; //can be any port you wish.

// app.use("/", (req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.send("Greeting from sever!");
//   }
// });

//use / route at the end! Every route math '/'

//ROUTES
app.get("/", (req, res) => {
  res.send("Greeting from sever!");
});

app.get("/data", (req, res) => {
  res.send("Here is some data for you!");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});

// FILES!

const txt = "Nice to meet you";

fs.writeFileSync("./text/file.txt", txt);

fs.writeFile("./text/fileAsync.txt", txt, (err) => {
  if (err) throw err;

  console.log("File was successfilly written");
});

// SYNC;
const file = fs.readFileSync("./text/file.txt", "utf-8");
console.log(file);
console.log("Waiting while file above is reading...");

// ASYNC
fs.readFile("./text/file.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);

  const readedFile = data.split(" ").join("-");

  fs.appendFile("./text/file.txt", ` ${readedFile}`, (err) => {
    if (err) throw err;

    console.log("append file");
  });
});

//DANGER!!! Unlink with async code should be inside function.
//tell about unlink with sync and async.
fs.unlink("./text/file.txt", (err) => {
  throw err;
});
