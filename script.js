function showSignIn() {
    document.getElementById('sign-up-container').classList.add('hide');
    document.getElementById('sign-in-container').classList.remove('hide');
    document.getElementById('left-title').textContent = "Welcome Back!";
    document.getElementById('left-description').textContent = "Sign in to continue.";
}

function showSignUp() {
    document.getElementById('sign-in-container').classList.add('hide');
    document.getElementById('sign-up-container').classList.remove('hide');
    document.getElementById('left-title').textContent = "Create an Account";
    document.getElementById('left-description').textContent = "Join us and explore endless possibilities. Sign up today!";
}

function validateForm(event) {
    event.preventDefault(); // Prevents form submission and page reload

    // Get form values
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validate email format
    if (!email.match(emailPattern)) {
        showToast("Invalid email format.");
        return;
    }

    // Validate password matching
    if (password !== confirmPassword) {
        showToast("Passwords do not match.");
        return;
    }

    // Show account creation success message
    showToast("Account created successfully!");
    
    // Clear form fields after successful submission
    document.getElementById("signup-email").value = "";
    document.getElementById("signup-password").value = "";
    document.getElementById("confirmPassword").value = "";
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";

    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

function validateAccount(event){
    event.preventDefault(); // Prevents form submission and page reload

    // Get form values
    const email = document.getElementById("signin-email").value;
    const password = document.getElementById("signin-password").value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    
    // Validate email format
    if (!email.match(emailPattern)) {
        showToast("Invalid email format.");
        return;
    }

    if (!password) {
        showToast("Please enter your correct password.");
        return;
    }
    
    // Show sign-in success message
    showToast("Sign-in successful!");
    
    // Clear form fields after successful submission
    document.getElementById("signin-email").value = "";
    document.getElementById("signin-password").value = "";
}

