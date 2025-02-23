document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(elementId, url) {
        return fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            });
    }

    // Load both header and footer, then initialize dark mode
    Promise.all([
        loadHTML('header', 'header.html'),
        loadHTML('footer', 'footer.html')
    ]).then(() => {
        initializeDarkMode();
    });
});

// Separate the dark mode logic into its own function
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