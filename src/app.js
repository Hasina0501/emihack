require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


const userRoutes = require('./routes/user.route')
const authRoutes = require('./routes/auth.route')
const captchaRoutes = require("./routes/captcha.route")

// Route pour authentification
app.use('/api/auth', authRoutes)
// Route pour utilisateur
app.use('/api/user', userRoutes)

//gestion captcha
app.use("/api/captcha", captchaRoutes)

module.exports = app