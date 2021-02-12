require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const routes = require('./routes');

const cors = require('cors');

const app = express();
connectDB();

app.use(cors());
app.use(express.json({}));
app.use(routes);

app.listen(process.env.PORT || 3000);