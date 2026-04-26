const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    email : {
        required:true,
        type: String
    },
        password : {
        required:true,
        type: String
    }
})

const user = mongoose.model('user',userschema)

module.exports = user