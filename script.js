document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop form from submitting by default

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm").value;
    const errorMsg = document.getElementById("error");
    

    // Reset error message
    errorMsg.textContent = "";

    // Validation checks
    if (name === "" || email === "" || password === "" || confirm === "") {
        errorMsg.textContent = "All fields are required.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMsg.textContent = "Please enter a valid email address.";
        return;
    }

    if (password !== confirm) {
        errorMsg.textContent = "Passwords do not match.";
        return;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    // You can reset the form or do something else here
});



