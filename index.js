require('dotenv').config();
const express = require("express");
const connectDB = require("./config/db");
const shortUrlRoute = require("./routes/shorturl")
const getShortenUrlRoute = require("./routes/getShortenurl")
const cors = require('cors');

const app = express();
connectDB();

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json({}));
app.listen(PORT|| 3000, () => console.log(`Server is listening on port ${PORT}`));

app.use("/",getShortenUrlRoute)
app.use("/shorturl", shortUrlRoute);