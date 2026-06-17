const {dotenv} = require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// route pour authentification
const authRoute = require('./src/routes/Auth.route.js');
app.use("/user",authRoute)

module.exports = {app}