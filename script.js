// Get form and input elements
const form = document.getElementById("contactForm");
const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const successMessage = document.getElementById("successMessage");

// Get error message elements
const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");

// Function to validate email format
function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Function to show/hide error messages
function showError(inputElement, errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = "block";
  inputElement.classList.add("input-error"); 
}

function hideError(inputElement, errorElement) {
  errorElement.style.display = "none";
  inputElement.classList.remove("input-error");
}

// Add event listener for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  // --- Validation Checks ---

  // Full Name validation
  if (fullName.value.trim() === "") {
    showError(fullName, fullNameError, "Please enter your full name.");
    isValid = false;
  } else {
    hideError(fullName, fullNameError);
  }

  // Email validation
  if (email.value.trim() === "" || !isValidEmail(email.value)) {
    showError(email, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    hideError(email, emailError);
  }

  // Subject validation
  if (subject.value.trim() === "") {
    showError(subject, subjectError, "Please enter a subject.");
    isValid = false;
  } else {
    hideError(subject, subjectError);
  }

  // Message validation
  if (message.value.trim() === "") {
    showError(message, messageError, "Please enter your message.");
    isValid = false;
  } else {
    hideError(message, messageError);
  }

  // If the form is valid, show success message and reset the form
  if (isValid) {
    console.log("Form submitted successfully!");
    console.log({
      fullName: fullName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    });

    // Hide the form and show the success message
    form.style.display = "none";
    successMessage.style.display = "block";
    
    setTimeout(() => {
      form.reset();
      form.style.display = "block";
      successMessage.style.display = "none";
    }, 5000);
  }
});
