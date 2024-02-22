const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("hello api my world");
});

mongoose
  .connect(
    "mongodb+srv://suksham:1giqxoJxGBJurrHl@backenddb.6fxnhfr.mongodb.net/crudapp?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to the database!");
    app.listen(3000, () => {
      console.log("server is running port 3000");
    });
  })

  .catch(() => {
    console.log("connection failed!");
  });
