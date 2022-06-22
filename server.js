const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(__dirname + "/assets"));
app.use("/api/books", require("./routes/books"));

mongoose.connect("mongodb://localhost:27017").then(() => {
  app.listen(port, () => {
    console.log(`app listening on port ${port}`);
  });
});
