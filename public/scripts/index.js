   // Load remembered email if it exists
   window.onload = function() {
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if (rememberedEmail) {
        document.getElementById('email').value = rememberedEmail;
        document.getElementById('rememberMe').checked = true;
    }
}

// Toggle Remember Me
function toggleRememberMe() {
    const email = document.getElementById('email').value;
    const rememberMeChecked = document.getElementById('rememberMe').checked;

    if (rememberMeChecked && email) {
        localStorage.setItem('rememberedEmail', email);
    } else {
        localStorage.removeItem('rememberedEmail');
    }
}

// Open Help Modal
function openHelpModal() {
    document.getElementById("helpModal").style.display = "block";
}

// Close Help Modal
function closeHelpModal() {
    document.getElementById("helpModal").style.display = "none";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById("helpModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Validate form before submission
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.querySelector('input[type="password"]').value;

    // Check if email and password are not empty
    if (email && password) {
        return true; // Allow form submission
    } else {
        alert("Please enter your email and password."); // Show an alert if fields are empty
        return false; // Prevent form submission
    }
}