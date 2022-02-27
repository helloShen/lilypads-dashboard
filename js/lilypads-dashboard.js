function toggleSidebarInit() {
    const sidebar = document.querySelector('.sidebar');
    const menu = document.querySelector('i.menu');
    menu.addEventListener('click', () => {
        sidebar.classList.toggle('hide');
    });
}

function highlightStar() {
    const stars = document.querySelectorAll('.projects > .card > .controls > i:first-child');
    stars.forEach((star) => {
        star.addEventListener('click', () => star.classList.toggle('lighted'));
    });
}

toggleSidebarInit();
highlightStar();