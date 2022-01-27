require("dotenv").config;
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

//creating the middleware
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("crypto-app-react/build"));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "crypto-app-react", "build", "index.html")
    )
  );
}

const port = process.env.PORT || 5000;
app.listen(port, console.log(`server listing to port 5000`));
