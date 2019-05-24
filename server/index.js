const express = require('express')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()
app.use(express.json())





app.listen(SERVER_PORT,() => console.log(`Listening on ${SERVER_PORT}`))