const express = require("express");

const app = express();

app.get("/",(req,res) => {
  req.send("Hello youtubers ! Welcome to Software bhayya");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});