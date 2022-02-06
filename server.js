const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/info.html");
});

app.post("/", (req, res) => {
  console.log(req.body);
});

let transporter = nodemailer.createTransport({
  host: "smtp-relay.sendinblue.com",
  secure: false,
  port: 587,
  service: "gmail",
  auth: {
    user: "hemoglobin92@gmail.com",
    pass: "8AVUWk3FOGdXj1pL",
  },
});

let mailOptions = {

};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
