require('dotenv').config()

const mongoose = require('mongoose')

const connectDB = async()=>{

    const MONGO = process.env.MONGO_LOCAL

    try{
        await mongoose.connect(MONGO)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = connectDB