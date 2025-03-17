document.addEventListener("DOMContentLoaded", function () {
  const resetForm = document.getElementById("reset-form");
  const popupMessage = document.getElementById("popup-message");

  resetForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Show the popup message
      popupMessage.style.display = "block";

      // Hide the popup after 4 seconds
      setTimeout(() => {
          popupMessage.style.display = "none";
      }, 4000);
  });
});
