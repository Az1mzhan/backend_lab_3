import { createTransport } from "nodemailer";

class EmailController {
  getEmailForm = (req, res) => {
    try {
      res.render("pages/emailForm");
    } catch (err) {
      console.error(err);

      res.status(400).send({ result: "The email form hasn't been loaded" });
    }
  };

  sendEmail = async (req, res) => {
    try {
      const { sender, recipient, emailData } = req.body;

      const config = {
        host: "smtp.office365.com",
        port: 587,
        secure: false,
        auth: {
          user: sender.address,
          pass: sender.password,
        },
        tls: {
          rejectUnauthorized: false,
        },
      };

      const transporter = createTransport(config);

      const message = {
        from: sender.address,
        to: recipient.address,
        subject: emailData.subject,
        text: emailData.content,
      };

      await transporter.sendMail(message, (error, info) => {
        if (error) {
          console.error("Error:", error.message);
        } else {
          console.log("Email sent:", info.response);
        }
      });

      res.status(200).send("The email has been sent");
    } catch (err) {
      console.error(err);

      res.status(400).send("The email hasn't been sent");
    }
  };
}

export default new EmailController();
