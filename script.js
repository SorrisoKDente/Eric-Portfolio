//Função para aplicar o tema
function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// Carregar o tema ao carregar a página
(function() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        applyTheme(savedTheme);
    } else if (prefersDarkScheme) {
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
})();

// Função que é chamada quando o botão é clicado
function toggleTheme() {
    const body = document.body;
    let currentTheme = 'light';

    if (body.classList.contains('dark-mode')) {
        applyTheme('light');
        currentTheme = 'light';
    } else {
        applyTheme('dark');
        currentTheme = 'dark';
    }
    localStorage.setItem('theme', currentTheme);
}

//Event Listener para o botão
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.querySelector('.toggle-theme');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', toggleTheme);
    }
});