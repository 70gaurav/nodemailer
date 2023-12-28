
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gaurav.kumar@exatosoftware.com',
    pass: 'Gaurav@888'
  }
});


export const sendEmail = (to, subject, text) => {
  
  const mailOptions = {
    from: 'gk17265@gmail.com',
    to, 
    subject, 
    text
  };

 
  return transporter.sendMail(mailOptions);
};


