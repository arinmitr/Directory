const express = require('express')
const detailsRouter = require('./routes/detailsRoute')

const app = express()

app.use(express.json())

app.use('/api/v1/home', detailsRouter)

module.exports = app
