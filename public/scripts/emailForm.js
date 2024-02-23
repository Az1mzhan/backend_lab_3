import clientController from "./ClientController.js";

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("submit-email-form-btn")
    .addEventListener("click", async (e) => {
      e.preventDefault();

      await clientController.sendEmail();
    });
});
