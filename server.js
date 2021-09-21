"use strict";

const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

const { getUser } = require("./controllers/museum.controller");
app.get("/", getUser);

// const getIndex = require("./controllers/index.controller");
// app.get("/", getIndex);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
