const pages = {
    home: 'home.html',
    about: 'about.html',
    services: 'services.html',
    contacts: 'contacts.html'
};

async function loadPage(page) {
    const response = await fetch(pages[page]);
    const html = await response.text();
    document.getElementById('main').innerHTML = html;
}

// Обработка навигации
function navigation(event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const page = event.target.getAttribute('href');
        loadPage(page);
        window.history.pushState({}, '', `#${page}`);
    }
}

// Инициализация приложения
function initSPA() {
    // Загружаем начальную страницу (по умолчанию home)
    loadPage('home');

    // Добавляем обработчик клика на навигацию
    document.querySelector('nav').addEventListener('click', navigation);
}

document.addEventListener('DOMContentLoaded', initSPA);
