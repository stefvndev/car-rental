const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vijayindalkar11@gmail.com',
      pass: 'hpyxcnurxcjznstm',
    },
  });
  

  app.post('/api/send-email', (req, res) => {
    // Retrieve the booking information from the request body
    const { carType, pickUp, dropOff, pickTime, dropTime, name, lastName, phone, age, email, address, city, zipcode } = req.body;
    
    // Compose the email content
    const emailContent = `
      Car Type: ${carType}
      Pick-Up: ${pickUp}
      Drop-Off: ${dropOff}
      Pick-Up Date & Time: ${pickTime}
      Drop-Off Date & Time: ${dropTime}
      
      Customer Information:
      Name: ${name} ${lastName}
      Phone: ${phone}
      Age: ${age}
      Email: ${email}
      Address: ${address}
      City: ${city}
      Zip Code: ${zipcode}
    `;
    
      const mailOptions = {
      from: 'Your_Email_Address', 
      to: 'vijayindalkar11@gmail.com', 
      subject: 'Car Reservation Details', 
      text: emailContent, 
    };
    

    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to send the email.' });
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).json({ message: 'Email sent successfully!' });
      }
    });
  });
  