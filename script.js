let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

next.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function() {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

window.onload = () => {
    const audiLogo = document.getElementById('audi-logo');
    audiLogo.style.opacity = '1';
    
    setTimeout(() => {
        audiLogo.style.opacity = '0'; 
    }, 2000);
};
