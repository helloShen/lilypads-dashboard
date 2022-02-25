const stars = document.querySelectorAll('.projects > .card > .controls > i:first-child');

stars.forEach((star) => {
    star.addEventListener('click', () => star.classList.toggle('lighted'));
});