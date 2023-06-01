const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Test.");
});

app.get("/user", (req, res) => {
  const user = { id: 123, fname: "Andy", lname: "Alexander", animal: "monkey" };
  res.json(user);
});

app.listen(3000, () => console.log("Example app is listening on port 3000."));
