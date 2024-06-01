const express = require('express')

// const {signin, signup} = 

const UserRouter = express.Router()

UserRouter.get('/', async(req, res) =>{
    res.sendFile(path.join(__dirname, 'sendEmail.html'))
})

// UserRouter.post("/signup", Singup)
// UserRouter.post("/signin", Singin)

module.exports = UserRouter