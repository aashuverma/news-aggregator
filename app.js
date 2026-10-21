const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const usersRoute = require("./routes/userRoutes");
const newsRoute = require("./routes/newsRoute");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res, next) => {
  res.send("Hello Users!");
});

app.use("/users", usersRoute);
app.use("/news", newsRoute);
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on ${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
  });

module.exports = app;
