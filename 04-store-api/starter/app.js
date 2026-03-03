require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundHandlerMiddleware = require("./middleware/not-found");

app.use(errorHandlerMiddleware);
app.use(notFoundHandlerMiddleware);

app.get("/products", (req, res) => {
  res.send("<h1>this is the products page</h1>");
});

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connectDB
    console.log(port, `Server is listening at port ${port}`);
  } catch (error) {
    console.log(error);
  }
};

start();
