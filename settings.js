// Hide loader after page loads
window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

// Theme toggler
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Load saved theme
window.addEventListener('DOMContentLoaded', function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }
});

// Share progress (mock function)
function shareProgress() {
    const progress = document.getElementById('progressFill')?.textContent || "your progress";
    alert(`🎯 You have shared: ${progress}! (Pretend this was shared)`);
}

// Logout function
function logout() {
    localStorage.setItem('isLoggedIn', 'false');
    window.location.href = 'login.html';
}
