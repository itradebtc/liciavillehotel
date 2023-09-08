const nodemailer = require('nodemailer')
require('dotenv').config()

export default function (req, res){
    const transporter = nodemailer.createTransport({
        port: 465,
        service: 'smtp.gmail.com', // e.g., 'Gmail'
        auth: {
          user: 'liciavillehotelagbor@gmail.com', // Your email
          pass: process.env.password, // Your email password
        },
        secure: true,
      });
  
      // Setup email data
      const mailOptions = {
        from: 'liciavillehotelagbor@gmail.com',
        to: 'liciavillehotelagbor@gmail.com',
        subject: 'Hotel Booking Confirmation',
        text: `Dear ${req.body.email}, your booking is confirmed from ${checkInDate} to ${checkOutDate}.`,
      };
  
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Email sent: ' + info.response);
          setIsBookingConfirmed(true);
        }
      });
}