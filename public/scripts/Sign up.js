document.addEventListener("DOMContentLoaded", function () {
    const signupBtn = document.querySelector(".signup-btn");
    const successPopup = document.getElementById("successPopup");

    signupBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const email = document.querySelector('input[type="email"]').value.trim();
        const username = document.querySelector('input[type="text"]').value.trim();
        const password = document.querySelector('input[type="password"]').value.trim();
        const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value.trim();

        // Validate inputs
        if (email === "" || username === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all fields before signing up!");
            return; // Stop execution if any field is empty
        }

        // Check if email contains '@'
        if (!email.includes("@")) {
            alert("Invalid email! Please enter a valid email address with '@'.");
            return; // Stop execution if email is invalid
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return; // Stop execution if passwords don't match
        }

        // Show success pop-up
        successPopup.classList.add("show");

        // Hide pop-up after 3 seconds
        setTimeout(() => {
            successPopup.classList.remove("show");
            window.location.href = "index.html"; // Redirect to sign-in page
        }, 3000);
    });
});
