const express = require('express');
const nodemailer = require('nodemailer');
const  path = require('path');
// const bodyParser = require('bodyparser');
const app = express();
const dotenv = require('dotenv');

dotenv.config()
const transporter = nodemailer.createTransport({
  service:"gmail",
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
  }
});

// 
// loginGmail
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, 'public')
// app.use(express.static(publicPath))
app.get('/', async(req, res) =>{
    res.sendFile(`${publicPath}/sendEmail.html`)
  })
  

app.post('/submit', (req, res) =>{
  const { name, email, comment } = req.body;


  const mailOptions = {
 
    from: '"Parwinder Singh Batra" parwinder.singhbatra@gmail.com', // Replace with your email address
    to: email, // Replace with the recipient's email address
    subject: `Email from ${name}`, // Replace with your desired subject
    text: comment, // Plain text content
    // or
    // html: '<h1>Welcome!</h1><p>This is an HTML email body.</p>' // HTML content (optional)
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      res.sendFile(`${publicPath}/successfully.html`);
    }
  });

})


app.get('*', async(req, res) =>{
  res.sendFile(`${publicPath}/404.html`)
})




app.listen(8080 , () =>{
    console.log("Server is running up and running at 8080")
})


// const sendEmail = require("./utils/Email.Utils")
// module.exports = {
//   sendEmail
// }