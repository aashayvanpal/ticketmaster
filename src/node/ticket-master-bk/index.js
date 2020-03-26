const express = require('express')
const mongoose = require('./config/database.js')
const app = express()
const port = 3001
const router = require('./config/routes.js')


app.use(express.json())


app.get('/', (req, res) => {
    res.send('Welcome to the Ticket master  app !')
})

app.use('/',router)

app.listen(port, () => {
    console.log('listening to port :', port)
})