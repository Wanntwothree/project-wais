const thirteenCard = document.querySelector('.thirteen-month');

thirteenCard.addEventListener('mouseenter', function(){
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');

        heart.textContent = '❤️';
        heart.className = 'heart';

        const randomLeft = Math.random() * 60 + 20;
        heart.style.left = randomLeft + '%'

        heart.style.animationDelay = i * 0.1 + 's';
        thirteenCard.appendChild(heart);
    }

});