const scriptUrl = document.currentScript
    ? new URL(document.currentScript.src, document.baseURI)
    : new URL('load-content.js', document.baseURI);

document.addEventListener('DOMContentLoaded', function() {
    const includeBaseUrl = new URL('.', scriptUrl);

    function isRelativeUrl(value) {
        return value && !/^(?:[a-z][a-z0-9+.-]*:|#|\/)/i.test(value);
    }

    function resolveIncludedPaths(container, includeUrl) {
        container.querySelectorAll('[href]').forEach(element => {
            const href = element.getAttribute('href');
            if (isRelativeUrl(href)) {
                element.setAttribute('href', new URL(href, includeUrl).href);
            }
        });

        container.querySelectorAll('[src]').forEach(element => {
            const src = element.getAttribute('src');
            if (isRelativeUrl(src)) {
                element.setAttribute('src', new URL(src, includeUrl).href);
            }
        });
    }

    function loadHTML(elementId, url) {
        const includeUrl = new URL(url, includeBaseUrl);

        return fetch(includeUrl)
            .then(response => response.text())
            .then(data => {
                const template = document.createElement('template');
                template.innerHTML = data;
                resolveIncludedPaths(template.content, includeUrl);
                document.getElementById(elementId).innerHTML = template.innerHTML;
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
