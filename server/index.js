const express = require('express')
require('dotenv').config()
const {SERVER_PORT, CONNECTION_STRING} = process.env
const massive = require('massive')
const app = express()
app.use(express.json())


massive(CONNECTION_STRING).then(db => {
    app.set('db',db)
    console.log('db connection established')
})


app.listen(SERVER_PORT,() => console.log(`Listening on ${SERVER_PORT}`))