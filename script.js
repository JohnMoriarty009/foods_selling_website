document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;

    // Vérifie la préférence de l'utilisateur stockée localement (optionnel)
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        // Bascule la classe 'dark-mode' sur le body
        body.classList.toggle('dark-mode');

        // Stocke la préférence de l'utilisateur (optionnel)
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});