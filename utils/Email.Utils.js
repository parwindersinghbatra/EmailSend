const nodemailer = require('nodemailer');

require("dotenv").config

const transporter = nodemailer.createTransport({
    service:"gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });


  async function SendEmail(to, subject, body ){
    const payload = {
        from:"samplesingh07@gmail.com",
        to,
        subject,
        body
    }

    transporter.sendMail(payload, (err, data) =>{
        if(err){
            console.error(err);
        }
        else{
                console.log("Email has been sent to ", to ," Successfully")
        }
    })
  }

  module.exports = SendEmail;