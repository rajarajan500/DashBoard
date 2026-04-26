const express = require('express')
const router = express.Router()
const User = require('../models/UserModels')
const hash = require('bcrypt')

router.post('/', async (req,res) =>{
    const { email, password } = req.body
    const hashpassword = await hash.hash(password,10)
    const users = new User({email,password:hashpassword})
    
    await users.save()
    res.send("saved")
})

module.exports = router