const express = require('express');
const nodemailer = require('nodemailer');

require('dotenv').config(); // Load environment variables from .env file

console.log(process.env.SMTP_PASS);
const app = express();

app.set('view engine', 'ejs');
// Middleware to parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve static files (like the HTML form)
app.use(express.static('public'));

const validateInput =(req , res ,next)=>{
  const {name ,email} =req.body;
  req.body.name = name.trim();
  req.body.email =email.trim();
  next()
}

// Route to handle form submission and send email
app.post('/send-email',validateInput ,async (req, res) => {
  const {name ,email,subject,message} =req.body;

  // console.log(req.body);
  // res.send("j")
  try {
    const transporter =await nodemailer.createTransport({
     service:'gmail',
     host:'smtp.gmail.com',
     port:587,
     secure:false,
      auth: {
        user:process.env.SMTP_USER, // use environment variable for user
        pass:process.env.SMTP_PASS// use environment variable for password
      },
      
    });

    // Email options
    const mailOptions = {
      name: name,
      from: process.env.SMTP_USER, // sender address
      to: email, // receiver's email
      subject: subject,
      text: message,
      html:`<html><body><h1 style="color: #007BFF;">${subject}</h1><p>${message}</p></body></html>`
    };
    // Send email
    const info = await transporter.sendMail(mailOptions);
    res.render('result', { success: true, message: 'Email sent successfully!',email:email });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).render('result', { success: false, message: 'Error sending email. Please try again later.'});
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
