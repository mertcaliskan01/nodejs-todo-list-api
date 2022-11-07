require('express-async-errors');
require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const error = require("./middleware/error");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());



require("./routes/auth.routes")(app);

require("./routes/todo.routes")(app);

app.use(error);

module.exports = app;