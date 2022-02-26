const sidebar = document.querySelector('.sidebar');
const menu = document.querySelector('i.menu');
menu.addEventListener('click', () => sidebar.classList.toggle('hide'));


const stars = document.querySelectorAll('.projects > .card > .controls > i:first-child');

stars.forEach((star) => {
    star.addEventListener('click', () => star.classList.toggle('lighted'));
});
