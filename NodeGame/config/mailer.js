const nodemailer = require("nodemailer");

const mailer = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure:true,
    auth: {
      user: "rol95lumen@gmail.com",
      pass: "frxfqgpfdofroctd"
    }
  });

  module.exports = mailer;
