const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

require("./db/conn");

dotenv.config({path: "./config.env"});
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cookieParser());
app.use(require("./router/auth"));


app.get('/', (req, res) => {
    res.send("hello hiya");
});

app.listen(port , () => {
    console.log(`server is running at ${port}`);
})
