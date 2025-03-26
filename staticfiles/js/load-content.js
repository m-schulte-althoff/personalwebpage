document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
});

// Dark mode logic
function initializeDarkMode() {
    const switchButton = document.getElementById('switch-mode');
    
    // Check for saved preference, default to true (dark mode) if no preference is saved
    const isDarkMode = localStorage.getItem('darkMode') === null ? true : localStorage.getItem('darkMode') === 'true';
    
    function setDarkMode(enabled) {
        document.body.classList.toggle('dark-mode', enabled);
        switchButton.textContent = enabled ? 'Switch to Light Mode' : 'Switch to Dark Mode';
        localStorage.setItem('darkMode', enabled);
    }

    if (switchButton) {
        switchButton.addEventListener('click', () => {
            const isDarkModeEnabled = document.body.classList.contains('dark-mode');
            setDarkMode(!isDarkModeEnabled);
        });

        // Set initial state
        setDarkMode(isDarkMode);
    }
}