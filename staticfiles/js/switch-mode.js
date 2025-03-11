document.addEventListener('DOMContentLoaded', function() {
    const switchButton = document.getElementById('switch-mode');

    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            switchButton.textContent = 'Switch to Light Mode';
        } else {
            switchButton.textContent = 'Switch to Dark Mode';
        }
    }

    if (switchButton) {
        switchButton.addEventListener('click', toggleMode);

        // Set dark mode as default
        document.body.classList.add('dark-mode');
        switchButton.textContent = 'Switch to Light Mode';
    }
});