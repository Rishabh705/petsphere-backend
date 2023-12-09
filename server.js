const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logEvents')
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const corsOptions = require('./config/corsOptions')
const { log } = require('console')
const PORT = process.env.PORT || 3500


//connect to mongo
connectDB()

//custom middlewares
app.use(logger)

//thirdparty middlewares
app.use(cors(corsOptions))

//built in middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//make all static files available
app.use(express.static(path.join('./public/'))); 

//routes
app.use('/',require('./routes/root'))
app.use('/api/pet',require('./routes/api/pet'))
app.use('/api/auth',require('./routes/api/auth'))

//Error page
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

//don't listen if mongo connection fails
mongoose.connection.once('open', ()=>{
    console.log('Connected to MONGO');
    app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))
})