
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "bb9d57acf42184",
    pass: "deea798c57a882",
  },
});

function sendEmail(message) {
  return transport.sendMail(message);
}
module.exports = sendEmail;
