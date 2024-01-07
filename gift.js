const noButton = document.getElementById('no');
noButton.addEventListener('mouseenter', function() {
const randomLeft = Math.random() * 100;
const randomTop = Math.random() * 100;
    noButton.style.left = `${randomLeft}%`;
    noButton.style.top = `${randomTop}%`;
});
