import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";

class ClientController {
  sendEmail = async () => {
    const senderName = document.getElementById("sender-name").value;
    const senderEmail = document.getElementById("sender-email").value;
    const emailPassword = document.getElementById("email-password").value;

    const sender = {
      name: senderName,
      address: senderEmail,
      password: emailPassword,
    };

    const recipientEmail = document.getElementById("recipient-email").value;

    const recipient = {
      address: recipientEmail,
    };

    const emailContent = document.getElementById("content").value;
    const emailSubject = document.getElementById("subject").value;

    const emailData = {
      content: emailContent,
      subject: emailSubject,
    };

    await axios.post("/email", {
      sender: sender,
      recipient: recipient,
      emailData: emailData,
    });
  };
}

export default new ClientController();
