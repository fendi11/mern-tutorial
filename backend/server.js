console.log("Hello world")
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

connectDB()
const app = express()
app.get('/api/goals',(req,res)=>{
    res.status(200).json({data :'Get Goals'})
})
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes.js'))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
