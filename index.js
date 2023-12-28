import express from "express";
import { sendEmail } from "./mailController.js";
import nodemailer from "nodemailer"


const app = express();


function sendMail1() {



    var smtpTransport = nodemailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: '',
            pass: ''
        },
        authMethod: 'LOGIN'
    });

    var mail = {
        from: 'gaurav.kumar@exatosoftware.com',
        to: 'gk17265@gmail.com',
        subject: "hello world",
        Text: "hello, gaurav"
    }

    return new Promise(resolve => {
        smtpTransport.sendMail(mail, function (error, response) {
            smtpTransport.close();
            console.log(error);
            if (error) {
                resolve(error);
            } else {
                resolve(true);
            }
        });
    });



}


sendMail1()


app.listen(4000, () => {
  console.log("see u at 4000");
});
