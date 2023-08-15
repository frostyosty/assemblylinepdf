document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Perform user authentication here (e.g., compare entered username/password).

  // For this example, let's assume the username is "user" and the password is "password".
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "user" && password === "password") {
    // Redirect to the dashboard (replace with the actual dashboard URL).
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials. Please try again.");
  }
});
