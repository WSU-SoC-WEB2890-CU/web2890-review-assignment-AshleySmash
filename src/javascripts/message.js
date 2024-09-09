document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const emailInput = document.getElementById("inputEmail");
  const emailError = document.getElementById("emailError");
  const requiredInputs = form.querySelectorAll(
    "input[required], textarea[required]"
  );

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    requiredInputs.forEach((input) => {
      input.classList.remove("border", "border-danger");
      const errorElement = document.getElementById(`${input.id}Error`);
      if (errorElement) {
        errorElement.style.display = "none";
      }
    });

    requiredInputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("border", "border-danger");
        const errorElement = document.getElementById(`${input.id}Error`);
        if (errorElement) {
          errorElement.style.display = "block";
        }
        isValid = false;
      }
    });

    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
      emailInput.classList.add("border", "border-danger");
      emailError.style.display = "block";
      isValid = false;
    }

    if (isValid) {
      alert("Thank you for contacting us!");
      form.reset();
    }
  });
});
