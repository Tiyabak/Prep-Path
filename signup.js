// Hide loader after page loads
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

// Signup form handling
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (username.length < 3 || password.length < 5) {
        alert('Username must be at least 3 characters and password at least 5 characters long.');
        return;
    }

    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Signup Successful! 🎉 Now login.');
    window.location.href = 'login.html';
});
