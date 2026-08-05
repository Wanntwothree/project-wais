const thirteenCard = document.querySelector('.thirteen-month');

if(thirteenCard){
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
}    

const loader = document.getElementById('loader-screen');

if (loader){
    window.addEventListener('load', function(){
    setTimeout(function(){
        loader.style.opacity = '0';
        setTimeout(function(){
            loader.style.display = 'none';
        }, 300);
    }, 500);
});

document.querySelectorAll('a, button[data-href]').forEach(function (link){
    link.addEventListener('click', function(e){
        const destination = this.tagName === 'A' ? this.href : this.dataset.href;
        if(!destination) return;

        e.preventDefault();

        loader.style.display = 'flex';
        requestAnimationFrame(function (){
            loader.style.opacity = '1';
            loader.style.pointerEvents = 'none';
        });

        setTimeout(function (){
            window.location.href = destination;
        }, 600);
    });
});

}

document.getElementById('downloadBtn').addEventListener('click', async () => {
    const response = await fetch('../img/m-saries/14th/img14-cover.png');
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'original-photo.jpg';
    link.click();

    URL.revokeObjectURL(url);
});
