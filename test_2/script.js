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
        window.history.pushState({page}, '', `#${page}`);
    }
}

// Инициализация приложения
function initSPA() {
    window.addEventListener('popstate', (event) => {
        event.preventDefault()
        if (event.state && event.state.page) {
            loadPage(event.state.page);
        } else {
            loadPage("home");
        }
    });

    loadPage("home")

    document.querySelector('nav').addEventListener('click', navigation);
}

document.addEventListener('DOMContentLoaded', initSPA);

