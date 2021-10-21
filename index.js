const express = require('express')
const consola = require('consola')
const database = require("./db.json");

const app = express();

app.use(require("cors")({
  origin: "http://localhost:8080",
  credentials: true,
  optionsSuccessStatus: 200
}));
app.all("/lookup", (req, res) => {
  res.json(database.lookup);
})
app.listen(3600, () => consola.success("Server listening on http://localhost:3600"));
