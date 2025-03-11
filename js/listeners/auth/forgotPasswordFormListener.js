import { apiService } from "../../apiService.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { validateEmail } from "../../utils/validation.js";

async function handleForgotPasswordSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const messageContainer = document.querySelector("#message-container");
  const fieldset = form.querySelector("fieldset");
  const submitButton = form.querySelector('button[type="submit"]');

  messageContainer.innerHTML = "";

  const formData = new FormData(form);
  const email = formData.get("email");

  // Validate email
  if (!validateEmail(email)) {
    displayMessage(
      messageContainer,
      "error",
      "Please enter a valid noroff.no or stud.noroff.no email address."
    );
    return;
  }

  fieldset.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    await apiService.forgotPassword({ email });
    displayMessage(
      messageContainer,
      "success",
      "Password reset instructions have been sent to your email."
    );
    form.reset();
  } catch (error) {
    displayMessage(messageContainer, "error", error.error);
  } finally {
    fieldset.disabled = false;
    submitButton.textContent = "Reset Password";
  }
}

export function forgotPasswordFormListener() {
  const form = document.querySelector("#forgotPasswordForm");

  if (form) {
    form.addEventListener("submit", handleForgotPasswordSubmit);
  }
}
