// server file

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config() //allows us to edit db schemas
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout') //telling it where our layouts are
app.use(expressLayouts)
app.use(express.static('public'))

// Mongoose Connection: currently producing servers errors (also using .env)
//const mongoose = require('mongoose')
//mongoose.connect(process.env.DATABASE_URL, {
//    useNewUrlParser: true 
//})
//const db = mongoose.connection
//db.on('error', error => console.error(error))
//db.once('open', () => console.log('FS: Connected to Mongoose'))
//app.use('/', indexRouter)

// Routes for Users, Posts
const userRouter = require('./routes/users')
app.use('/', indexRouter)
app.use('/users', userRouter)

app.listen(3000, () => console.log('FS: Server started'))

// when deploying: app.listen(process.env.PORT || 3000)