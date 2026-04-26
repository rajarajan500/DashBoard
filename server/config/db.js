const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("DataBase connected")
    }
    catch(error){
        console.log(`something went wrong : ${error}`)

    }
}

module.exports = connectDB