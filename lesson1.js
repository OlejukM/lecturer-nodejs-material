const http = require("http");

const port = 3000; //can be any port you wish.

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers); //Show what we can get from request.

  const url = req.url;

  if (url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write('<h1>HelloWorld</h1>')

    // res.setHeader("Content-Type", "text/html");
    // res.write('<h1>HelloWorld</h1>')

    return res.end();
  }

  if (url === "/data") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");

    res.write("Here is some data for you");


    return res.end();
  }
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
