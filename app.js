// Express 環境
const express = require("express");
const app = express();
const port = 3000;

require("./config/mongoose");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
