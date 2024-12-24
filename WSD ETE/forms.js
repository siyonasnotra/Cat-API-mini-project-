// Modal functionality
const modal = document.getElementById("sign-up-modal");
const modalButton = document.getElementById("sign-up-modal-button");
const closeModal = document.querySelector(".close");

modalButton.onclick = function() {
    modal.style.display = "block";
}

closeModal.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form validation
const form = document.getElementById('sign-up-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const formErrors = document.getElementById('form-errors');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    formErrors.innerHTML = '';
    
    let errors = [];

    // Validate name (at least 3 characters)
    if (nameInput.value.length < 3) {
        errors.push('Name must be at least 3 characters long.');
    }

    // Validate email (simple regex)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        errors.push('Invalid email address.');
    }

    // Validate password (min 8 characters, at least one letter and number)
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        errors.push('Password must be at least 8 characters long and contain both letters and numbers.');
    }

    // Check if passwords match
    if (passwordInput.value !== confirmPasswordInput.value) {
        errors.push('Passwords do not match.');
    }

    // Display errors or submit form
    if (errors.length > 0) {
        formErrors.innerHTML = errors.join('<br>');
        formErrors.style.color = 'red';
    } else {
        formErrors.style.color = 'green';
        formErrors.innerHTML = 'Sign-up successful!';
        // Here you can process the form data (e.g., send it to the server)
    }
});
