const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes');
const cors = require('cors');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL;
const app = express();
const PORT = 3001;

mongoose.connect(mongoString).then(() => console.log('Connected!'));

app.use(express.json());
app.use(cors());
app.use("/api", routes)

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})