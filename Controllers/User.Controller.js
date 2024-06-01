const httpStatus = require("http-status")
const bcrypt = require("bcrypt")

const { SendEmail } = require("../utils")
const { sendEmail } = require("..")

require("dotenv").config()


async function Signup(req, res){
    try{
        const {name, email, password} = res.body

        const encryptedPassword = await bcrypt.hash(password, parseInt(process.env.SALT))

        const user = await new User({
            name:name,
            email:email,
            password:encryptedPassword
        })

        await user.save()
        const subject = "Welcome to URL"
        sendEmail(email, );
        res.status(httpStatus.CREATED).json({
            message:"Account created successfully"
        })
        
    }catch(err){
        console.log(err)
        res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
            message:"Something went wrong"
        })
    }
}